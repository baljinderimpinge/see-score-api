
const { userModel } = require("../models")
const { Op } = require("sequelize");
const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const auth = require("../middleware/jwttoken")
const common = require("../common")
let datapart = require("./data")
const { ConfidentialClientApplication } = require('@azure/msal-node');
const { GraphRbacManagementClient } = require('@azure/graph');
const { ClientSecretCredential } = require("@azure/identity");
const { DefaultAzureCredential } = require("@azure/identity");

const axios = require('axios');

const createUser = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(20).required(),
        lastName: Joi.string().min(3).max(20).allow("", null),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        subdomain: Joi.string().optional(),
        status: Joi.boolean().optional(),
        role: Joi.string().optional(),
    })

    let schemaValidator = userSchema.validate(data);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400
        })
    } else {
        userPayload = schemaValidator.value
    }
    try {
        const checkData = await userModel.findAll({
            where: {
                [Op.or]: {
                    email: userPayload.email
                },
            },
        });
        if (checkData && checkData.length !== 0) {
            return res.status(409).json({
                message: "user is already exists",
                status: 409
            })
        } else {
            const encryptedPass = await bcrypt.hash(userPayload.password, saltRounds);
            userPayload['password'] = encryptedPass;
            const payload = {
                ...userPayload,
                creationTs: Date.now(),
                isEmailVerify: true

            }
            const result = await userModel.create(payload)
            console.log(result, "gggggggggggggg");
            const token = await auth.jwtSign({ _id: result._id, role: result.role, email: result.role });
            console.log(result, "gggggggggggggg");
            return res.status(200).json({
                message: "user created Successfully",
                data: { user: result, token },
                status: 200
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,", error,
            status: 500,

        })
    }

}



const login = async (req, res) => {
    try {
        let token = req.body.token;
        let publickey = process.env.PUBLICKEY;
        console.log(publickey, "publickeypublickey")
        const decoded = await auth.jwtAuthVerify(token, publickey);
        console.log(decoded, "00--");
        const tokenapi = await axios.post(
            `https://dev-3hmsijzw0t7ryxrl.us.auth0.com/oauth/token`,
                {
                    "client_id": process.env.AUTH_TOKEN_CLIENT_ID,
                    "client_secret": process.env.AUTH_TOKEN_CLIENT_SECRET,
                    "audience": process.env.AUTH_TOKEN_AUDIENCE,
                    "grant_type": process.env.AUTH_TOKEN_GRANT_TYPE
                
            },

            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
let newtoken = tokenapi.data.access_token;
console.log(tokenapi.data.access_token,"tokenapitokenapi")
        let random = await auth.generateRandomString(12);
        console.log(random,"---=-=-=")
            const newapi = await axios.get(
                `https://dev-3hmsijzw0t7ryxrl.us.auth0.com/api/v2/users/${decoded.sub}`,
                
                {
                    headers: {
                        'Authorization': `Bearer ${newtoken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi.data,"---=-=-=")
            let datamain = newapi.data;
            return res.status(200).json({
                message: "Login successfully",
                data: datamain,
                status: 200
            });
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error!,", error,
            status: 500,

        })
    }

}

const getAllThirdData = async (req, res) => {
    try {
        let data = await datapart.dataPart();
        return res.status(200).json({
            message: "Data fetched successfully",
            data: data.value,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500
        });
    }
};

const getToken = async (req, res) => {
   // const tenantId = req.body.tenatId;
   const tenantId = req.body.tenantID;
    const clientId = process.env.CLIENTID;
    const clientSecret = process.env.CLIENTSECRET;
    const scope = process.env.SCOPE;
    const grantType = process.env.GRANT_TYPE;

    const requestBody = new URLSearchParams();
    requestBody.append('client_id', clientId);
    requestBody.append('client_secret', clientSecret);
    requestBody.append('scope', scope);
    requestBody.append('grant_type', grantType);

    try {
        const response = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            requestBody.toString(), 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        const accessToken = response.data.access_token;
        console.log('Access Token:', accessToken);
        if (accessToken) {
            const newapi = await axios.get(
                `https://graph.microsoft.com/v1.0/security/secureScores`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
           // console.log(newapi, "--0-0-0-")
            let identity = newapi.data.value[0].controlScores;
            const activeObjects = identity.filter(obj => obj.controlName === 'UserRiskPolicy');

           
            return res.status(200).json({
                message: "Data fetched successfully",
                data: activeObjects,
                status: 200
            });
        }
        //return accessToken;
    } catch (error) {
        console.log(error, "000");
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};



const getRecomendations = async (req, res) => {
    // const tenantId = "4cda6fa4-1377-4e12-827a-362a904d8b84";
    const tenantId = req.body.tenantID;
    const clientId = process.env.CLIENTID;
    const clientSecret = process.env.CLIENTSECRET;
    const scope = process.env.SCOPE;
    const grantType = process.env.GRANT_TYPE;

    const requestBody = new URLSearchParams();
    requestBody.append('client_id', clientId);
    requestBody.append('client_secret', clientSecret);
    requestBody.append('scope', scope);
    requestBody.append('grant_type', grantType);

    try {
        const response = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            requestBody.toString(), 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        // Access the token from the response
        const accessToken = response.data.access_token;
        console.log('Access Token:', accessToken);
        if (accessToken) {
            const newapi = await axios.get(
                `https://graph.microsoft.com/beta/directory/recommendations`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi, "--0-0-0-")
            let activestatus = newapi.data.value;
            const activeObjects = activestatus.filter(obj => obj.status === 'active');
            console.log(activeObjects,"activeObjects")
            
    
        if(req.query.id){
            let checkid = req.query.id;
            let datasend = activeObjects.filter(obj => obj.id === checkid)
            const filteredData = datasend.map(obj => ({
                id: obj.id,
                displayName: obj.displayName,
                priority: obj.priority,
                insights: obj.insights,
                benefits: obj.benefits,
                actionSteps: obj.actionSteps,
                actionURL: obj.actionURL

            
        }));
            return res.status(200).json({
                message: "Data fetched successfully",
               data: filteredData,
                status: 200
            });
    }
        else{
           // let data = activeObjects;
            const filteredData = activeObjects.map(obj => ({
                    id: obj.id,
                    displayName: obj.displayName,
                    priority: obj.priority,

                
            }));
            return res.status(200).json({
                message: "Data fetched successfully",
               data: filteredData,
                status: 200
            });
        
    }
} 
    
 } catch (error) {
        console.log(error, "000");
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};














// const addCustomerInAzure = async (req, res) => {    
//     const clientId = process.env.MICROSOFT_CLIENT_ID; // Replace with your actual client ID
//     const clientSecret =  process.env.CLIENTSECRET; // Replace with your actual client secret
//     const authority =process.env.AUTHORITY; // Replace with your actual tenant ID
//     const tenantId = process.env.MICROSOFT_TENANT;
//     const msalConfig = {
//         auth: {
//             clientId,
//             authority: `https://login.microsoftonline.com/${tenantId}`,
//             clientSecret,
//         },
//     };
//     try {
//         const userDetails = req.body; // Assuming the client sends user details in the request body

//         // const cca = new ConfidentialClientApplication(msalConfig);
//         // const tokenResponse = await cca.acquireTokenByClientCredential({
//         //     scopes: ['https://graph.microsoft.com/.default'],
//         // });
//         // const credentials = new DefaultAzureCredential();
//         // const client = new GraphRbacManagementClient(credentials, tenantId);
//         const credentials = new ClientSecretCredential(tenantId, clientId, clientSecret);
//         //const client = new GraphRbacManagementClient(credentials, tenantId);
//         const tokenResponse = await credentials.getToken(['https://graph.microsoft.com/.default']);
//         console.log('Token Response:', tokenResponse);
//         const client = new GraphRbacManagementClient(tokenResponse.accessToken, tenantId);

      
//        // const client = new GraphRbacManagementClient(tokenResponse.accessToken, tenantId);
// console.log(client,"-----")
//         // Create the user in Azure AD
//         const createdUser = await client.users.create({
//             accountEnabled: true,
//             displayName: userDetails.displayName,
//             mailNickname: userDetails.mailNickname,
//             userPrincipalName: userDetails.userPrincipalName,
//             passwordProfile: {
//                 password: userDetails.password,
//                 forceChangePasswordNextSignIn: false,
//             },
//         });

//         // Continue with the rest of your logic...

//         return res.status(200).json({
//             message: "User created successfully",
//             user: createdUser,
//             status: 200
//         });
//     } catch (error) {
//         console.error('Error adding customer in Azure:', error);
//         return res.status(500).json({
//             message: 'Internal server error',
//             error: error.message,
//             status: 500,
//         });
//     }
// };
// const addCustomerInAzure = async (req, res) => {    
//     const clientId = process.env.MICROSOFT_CLIENT_ID;
//     const clientSecret = process.env.CLIENTSECRET;
//     const authority = `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT}`;
//     const tenantId = process.env.MICROSOFT_TENANT;

//     try {
//         const userDetails = req.body;

//         // Acquire token using ClientSecretCredential
//         const credentials = new ClientSecretCredential(tenantId, clientId, clientSecret);
//         const tokenResponse = await credentials.getToken(['https://graph.microsoft.com/.default']);

//         // Check if tokenResponse contains accessToken
//         if (!tokenResponse || !tokenResponse.accessToken) {
//             return res.status(500).json({
//                 message: 'Internal server error',
//                 error: 'Access Token missing',
//                 status: 500,
//             });
//         }

//         // Create GraphRbacManagementClient with acquired token
//         const client = new GraphRbacManagementClient(tokenResponse.accessToken, tenantId);

//         // Create the user in Azure AD
//         const createdUser = await client.users.create({
//             accountEnabled: true,
//             displayName: userDetails.displayName,
//             mailNickname: userDetails.mailNickname,
//             userPrincipalName: userDetails.userPrincipalName,
//             passwordProfile: {
//                 password: userDetails.password,
//                 forceChangePasswordNextSignIn: false,
//             },
//         });

//         // Continue with the rest of your logic...

//         return res.status(200).json({
//             message: "User created successfully",
//             user: createdUser,
//             status: 200
//         });
//     } catch (error) {
//         console.error('Error adding customer in Azure:', error);
//         return res.status(500).json({
//             message: 'Internal server error',
//             error: error.message,
//             status: 500,
//         });
//     }
// };

//const { GraphRbacManagementClient } = require('@azure/graph');

// const addCustomerInAzure = async (req, res) => {
//     const clientId = process.env.MICROSOFT_CLIENT_ID;
//     const clientSecret = process.env.CLIENTSECRET;
//     const tenantId = process.env.MICROSOFT_TENANT;

//     try {
//         const userDetails = req.body;

//         const credentials = new ClientSecretCredential(tenantId, clientId, clientSecret);
//         const tokenResponse = await credentials.getToken(['https://graph.microsoft.com/.default']);
// console.log(tokenResponse,"tokenResponse")
      
// const client = new GraphRbacManagementClient({
//     credentials: {
//         tokenCredential: {
//             getToken: async () => ({
//                 token: tokenResponse.accessToken,
//                 expiresOnTimestamp: Date.now() + 3600000, // Assuming the token expires in 1 hour
//             }),
//         },
//     },
//     endpoint: 'https://graph.microsoft.com',
//     baseUri: 'https://graph.microsoft.com', // Set the baseUri to the Graph API endpoint
// });

//         const createdUser = await client.users.create({
//             accountEnabled: true,
//             displayName: userDetails.displayName,
//             mailNickname: userDetails.mailNickname,
//             userPrincipalName: userDetails.userPrincipalName,
//             passwordProfile: {
//                 password: userDetails.password,
//                 forceChangePasswordNextSignIn: false,
//             },
//         });

//         return res.status(200).json({
//             message: 'User created successfully',
//             user: createdUser,
//             status: 200,
//         });
//     } catch (error) {
//         console.error('Error adding customer in Azure:', error);
//         return res.status(500).json({
//             message: 'Internal server error',
//             error: error.message,
//             status: 500,
//         });
//     }
// };


// const addCustomerInAzure = async (req, res) => {
//     const clientId = process.env.MICROSOFT_CLIENT_ID;
//     const clientSecret = process.env.CLIENTSECRET;
//     const tenantId = process.env.MICROSOFT_TENANT;

//     try {
//         const userDetails = req.body;

//         const credentials = new ClientSecretCredential(tenantId, clientId, clientSecret);
//         const tokenResponse = await credentials.getToken(['https://graph.microsoft.com/.default']);
//         console.log(tokenResponse, "tokenResponse");

//         const client = new GraphRbacManagementClient({
//             credentials: {
//                 tokenCredential: {
//                     getToken: async (scopes) => {
//                         return {
//                             token: tokenResponse.accessToken,
//                             expiresOnTimestamp: Date.now() + 3600000, // Assuming the token expires in 1 hour
//                         };
//                     },
//                 },
//             },
//             endpoint: 'https://graph.microsoft.com',
//         });

//         const createdUser = await client.users.create({
//             accountEnabled: true,
//             displayName: userDetails.displayName,
//             mailNickname: userDetails.mailNickname,
//             userPrincipalName: userDetails.userPrincipalName,
//             passwordProfile: {
//                 password: userDetails.password,
//                 forceChangePasswordNextSignIn: false,
//             },
//         });

//         return res.status(200).json({
//             message: 'User created successfully',
//             user: createdUser,
//             status: 200,
//         });
//     } catch (error) {
//         console.error('Error adding customer in Azure:', error);
//         return res.status(500).json({
//             message: 'Internal server error',
//             error: error.message,
//             status: 500,
//         });
//     }
// };

const addCustomerInAzure = async (req, res) => {
    const clientId = process.env.MICROSOFT_CLIENT_ID;

    try {
        const userDetails = req.body;

        const credentials = new DefaultAzureCredential();
        const tokenResponse = await credentials.getToken(["https://graph.microsoft.com/.default"]);
        console.log(tokenResponse, "tokenResponse");

        const client = new GraphRbacManagementClient({
            credentials: credentials,
            endpoint: 'https://graph.microsoft.com',
            baseUri: `https://graph.microsoft.com/${process.env.MICROSOFT_TENANT}`,
        });

        const createdUser = await client.users.create({
            accountEnabled: true,
            displayName: userDetails.displayName,
            mailNickname: userDetails.mailNickname,
            userPrincipalName: userDetails.userPrincipalName,
            passwordProfile: {
                password: userDetails.password,
                forceChangePasswordNextSignIn: false,
            },
        });

        return res.status(200).json({
            message: 'User created successfully',
            user: createdUser,
            status: 200,
        });
    } catch (error) {
        console.error('Error adding customer in Azure:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            status: 500,
        });
    }
};


module.exports = {
    createUser,
    login,
    getAllThirdData,
    getToken,
    getRecomendations,
    addCustomerInAzure
}
