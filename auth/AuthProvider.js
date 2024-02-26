const msal = require('@azure/msal-node');
const axios = require('axios');
const { userModel, subscriptionModel, userTokenmodel, securityChecklist, customerSecurityChecklist } = require("../models")
const { Op } = require("sequelize");
const { msalConfig } = require('../common/authConfig');


const addSecurity = async (email) => {
    console.log(email, "-==-=--===-=")
    const existingSecurity = await customerSecurityChecklist.findAll({
        where: {
            email: email,
            isDeleted: false
        }
    });
    console.log(existingSecurity, "existingSecurity")
    if (existingSecurity.length == 0) {
        let securityIds = await securityChecklist.findAll();
        const uniqueSecurityIds = {};
        securityIds.forEach(securityId => {
            uniqueSecurityIds[securityId.id] = true;
        });

        const promises = []; // Array to store promises for all created entries
        for (const id in uniqueSecurityIds) {
            let securityPayload = {
                email: email,
                securityChecklistId: id
            };
            promises.push(customerSecurityChecklist.create(securityPayload));
        }

        // Wait for all entries to be created
        await Promise.all(promises);

        return true;
    }
}


class AuthProvider {
    msalConfig;
    cryptoProvider;

    constructor(msalConfig) {
        this.msalConfig = msalConfig
        this.cryptoProvider = new msal.CryptoProvider();
    };

    login(options = {}) {
        return async (req, res, next) => {
console.log("1111111111111111111")
            /**
             * MSAL Node library allows you to pass your custom state as state parameter in the Request object.
             * The state parameter can also be used to encode information of the app's state before redirect.
             * You can pass the user's state in the app, such as the page or view they were on, as input to this parameter.
             */
            const state = this.cryptoProvider.base64Encode(
                JSON.stringify({
                    successRedirect: options.successRedirect || '/',
                    authid: req.query.authid
                })
            );
            console.log("22222222222222222")
            const authCodeUrlRequestParams = {
                state: state,

                /**
                 * By default, MSAL Node will add OIDC scopes to the auth code url request. For more information, visit:
                 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
                 */
                scopes: options.scopes || [],
                redirectUri: options.redirectUri,
            };

            const authCodeRequestParams = {
                state: state,

                /**
                 * By default, MSAL Node will add OIDC scopes to the auth code request. For more information, visit:
                 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
                 */
                scopes: options.scopes || [],
                redirectUri: options.redirectUri,
            };
            console.log("333333333333333333")
            /**
             * If the current msal configuration does not have cloudDiscoveryMetadata or authorityMetadata, we will 
             * make a request to the relevant endpoints to retrieve the metadata. This allows MSAL to avoid making 
             * metadata discovery calls, thereby improving performance of token acquisition process. For more, see:
             * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/performance.md
             */
            if (!this.msalConfig.auth.cloudDiscoveryMetadata || !this.msalConfig.auth.authorityMetadata) {

                const [cloudDiscoveryMetadata, authorityMetadata] = await Promise.all([
                    this.getCloudDiscoveryMetadata(this.msalConfig.auth.authority),
                    this.getAuthorityMetadata(this.msalConfig.auth.authority)
                ]);

                this.msalConfig.auth.cloudDiscoveryMetadata = JSON.stringify(cloudDiscoveryMetadata);
                this.msalConfig.auth.authorityMetadata = JSON.stringify(authorityMetadata);
            }
            console.log("44444444444444444")
            const msalInstance = this.getMsalInstance(this.msalConfig);
            // trigger the first leg of auth code flow
            return this.redirectToAuthCodeUrl(
                authCodeUrlRequestParams,
                authCodeRequestParams,
                msalInstance
            )(req, res, next);
        };
    }

    acquireToken(options = {}) {
        return async (req, res, next) => {
            try {
                const msalInstance = this.getMsalInstance(this.msalConfig);

                /**
                 * If a token cache exists in the session, deserialize it and set it as the 
                 * cache for the new MSAL CCA instance. For more, see: 
                 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/caching.md
                 */
                if (req.session.tokenCache) {
                    msalInstance.getTokenCache().deserialize(req.session.tokenCache);
                }

                const tokenResponse = await msalInstance.acquireTokenSilent({
                    account: req.session.account,
                    scopes: options.scopes || [],
                });

                /**
                 * On successful token acquisition, write the updated token 
                 * cache back to the session. For more, see: 
                 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/caching.md
                 */
                req.session.tokenCache = msalInstance.getTokenCache().serialize();
                req.session.accessToken = tokenResponse.accessToken;
                req.session.idToken = tokenResponse.idToken;
                req.session.account = tokenResponse.account;

                res.redirect(options.successRedirect);
            } catch (error) {
                if (error instanceof msal.InteractionRequiredAuthError) {
                    return this.login({
                        scopes: options.scopes || [],
                        redirectUri: options.redirectUri,
                        successRedirect: options.successRedirect || '/',
                    })(req, res, next);
                }

                next(error);
            }
        };
    }

    handleRedirect(options = {}) {
        console.log("666666666666666")
        return async (req, res, next) => {
            if (!req.body || !req.body.state) {
                console.log("7777777777777777777")
                return next(new Error('Error: response not found'));
            }
            console.log("8888888888888888888888")
            const state = JSON.parse(this.cryptoProvider.base64Decode(req.body.state));
            const authid = state.authid;
            const authCodeRequest = {
                ...req.session.authCodeRequest,
                code: req.body.code,
                codeVerifier: req.session.pkceCodes.verifier,
            };
            console.log("99999999999999999")
            try {
                console.log("1010101010101010")
                console.log(this.msalConfig,"this.msalConfigthis.msalConfig")
                const msalInstance = this.getMsalInstance(this.msalConfig);
console.log(msalInstance,"msalInstancemsalInstancemsalInstance")
                if (req.session.tokenCache) {
                    console.log("111111111001111111")
                    msalInstance.getTokenCache().deserialize(req.session.tokenCache);
                }
              
                const tokenResponse = await msalInstance.acquireTokenByCode(authCodeRequest, req.body);
                console.log("12121212121212",tokenResponse)
                let freshrefreshtoken;
                const refreshToken = () => {
                    const tokenCache = msalInstance.getTokenCache().serialize();
                    const refreshTokenObject = (JSON.parse(tokenCache)).RefreshToken
                    const refreshToken = refreshTokenObject[Object.keys(refreshTokenObject)[0]].secret;

                    freshrefreshtoken = refreshToken;
                    return refreshToken;
                }
                console.log(refreshToken(), "-=-=-=") // this is mandatory
                //const expiresDiff = tokenResponse?.extExpiresOn.getTime()-tokenResponse?.expiresOn.getTime()
                let expiresDiff = Math.floor((new Date(tokenResponse.expiresOn).getTime() - new Date().getTime()) / 1000);
                let userPayload = {
                    userId: authid,
                    email: tokenResponse.account.username,
                    expires_in: expiresDiff,
                    refresh_token: freshrefreshtoken,
                    token: tokenResponse.accessToken,
                    tokentimestamp: new Date().getTime()
                }
                await userTokenmodel.create(userPayload)
                addSecurity(tokenResponse.account.username)
                req.session.tokenCache = msalInstance.getTokenCache().serialize();
                req.session.idToken = tokenResponse.idToken;
                req.session.account = tokenResponse.account;
                req.session.isAuthenticated = true;

                const state = JSON.parse(this.cryptoProvider.base64Decode(req.body.state));
                res.redirect(process.env.FRONT_URL);
            } catch (error) {
                next(error);
            }
        }
    }

    logout(options = {}) {
        return (req, res, next) => {

            /**
             * Construct a logout URI and redirect the user to end the
             * session with Azure AD. For more information, visit:
             * https://docs.microsoft.com/azure/active-directory/develop/v2-protocols-oidc#send-a-sign-out-request
             */
            let logoutUri = `${this.msalConfig.auth.authority}/oauth2/v2.0/`;

            if (options.postLogoutRedirectUri) {
                logoutUri += `logout?post_logout_redirect_uri=${options.postLogoutRedirectUri}`;
            }

            req.session.destroy(() => {
                res.redirect(logoutUri);
            });
        }
    }

    /**
     * Instantiates a new MSAL ConfidentialClientApplication object
     * @param msalConfig: MSAL Node Configuration object 
     * @returns 
     */
    getMsalInstance(msalConfig) {
        console.log("55555555555555")
        return new msal.ConfidentialClientApplication(msalConfig);
    }


    /**
     * Prepares the auth code request parameters and initiates the first leg of auth code flow
     * @param req: Express request object
     * @param res: Express response object
     * @param next: Express next function
     * @param authCodeUrlRequestParams: parameters for requesting an auth code url
     * @param authCodeRequestParams: parameters for requesting tokens using auth code
     */
    redirectToAuthCodeUrl(authCodeUrlRequestParams, authCodeRequestParams, msalInstance) {

        return async (req, res, next) => {
            // Generate PKCE Codes before starting the authorization flow
            const { verifier, challenge } = await this.cryptoProvider.generatePkceCodes();

            // Set generated PKCE codes and method as session vars
            req.session.pkceCodes = {
                challengeMethod: 'S256',
                verifier: verifier,
                challenge: challenge,
            };

            /**
             * By manipulating the request objects below before each request, we can obtain
             * auth artifacts with desired claims. For more information, visit:
             * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationurlrequest
             * https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_node.html#authorizationcoderequest
             **/
            req.session.authCodeUrlRequest = {
                ...authCodeUrlRequestParams,
                responseMode: msal.ResponseMode.FORM_POST, // recommended for confidential clients
                codeChallenge: req.session.pkceCodes.challenge,
                codeChallengeMethod: req.session.pkceCodes.challengeMethod,
            };
            req.session.authCodeRequest = {
                ...authCodeRequestParams,
                code: '',
            };
            try {
                const authCodeUrlResponse = await msalInstance.getAuthCodeUrl(req.session.authCodeUrlRequest);

                res.redirect(authCodeUrlResponse);
                // return res.status(200).json({
                //     message: "Data fetched successfully",
                //     data: authCodeUrlResponse,
                //     status: 200
                // });
            } catch (error) {
                next(error);
            }
        };
    }

    /**
     * Retrieves cloud discovery metadata from the /discovery/instance endpoint
     * @returns 
     */
    async getCloudDiscoveryMetadata(authority) {
        const endpoint = 'https://login.microsoftonline.com/common/discovery/instance';

        try {
            const response = await axios.get(endpoint, {
                params: {
                    'api-version': '1.1',
                    'authorization_endpoint': `${authority}/oauth2/v2.0/authorize`
                }
            });

            return await response.data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves oidc metadata from the openid endpoint
     * @returns
     */
    async getAuthorityMetadata(authority) {
        const endpoint = `${authority}/v2.0/.well-known/openid-configuration`;

        try {
            const response = await axios.get(endpoint);
            return await response.data;
        } catch (error) {
        }
    }
}

const authProvider = new AuthProvider(msalConfig);

module.exports = authProvider;