
const { userModel } = require("../models")
const { Op } = require("sequelize");
const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const auth = require("../middleware/jwttoken")
const common = require("../common")
let datapart = require("./data")

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
        console.log("------", userPayload)
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
            console.log(payload);
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
    //console.log(req.oidc.isAuthenticated(),"---0-0-0-0-0")
    try {
        console.log("-----")
        let token = req.body.token;
        let publickey = process.env.PUBLICKEY;
        console.log(publickey, "publickeypublickey")
        const decoded = await auth.jwtAuthVerify(token, publickey);
        console.log(decoded, "00--");
        const existingUser = await userModel.findOne({
            where: {

                email: decoded.email,
                role: common.constant.CONSTANTS.CUSTOMER,
                isDeleted: false

            },
        })
        console.log(existingUser, "existingUser")
        if (!existingUser) {
            const userPayload = {
                email: decoded.email,
                firstName: decoded.given_name,
                lastName: decoded.family_name,
                isEmailVerified: decoded.email_verified,
                password: "1234",
                picture: decoded.picture,
                creationTs: Date.now()
            };
            const result = await userModel.create(userPayload)
            return res.status(200).json({
                message: "Login successfully",
                data: existingUser,
                status: 200
            });
        } else {
            return res.status(200).json({
                message: "Login successfully",
                status: 200
            });
        }
    } catch (error) {
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



// const getToken = async (req, res) => {
//     console.log(process.env.CLIENTSECRET,"process.env.CLIENTSECRET")
//         const tenantId = req.body.tenatId;
//         const clientId = process.env.CLIENTID;
//         const clientSecret = process.env.CLIENTSECRET;
//         const scope = process.env.SCOPE; // e.g., 'https://graph.microsoft.com/.default'
//         const grantType = process.env.GRANT_TYPE;
//         try {
//           const response = await axios.post(
//             `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
//             `client_id=${clientId}&client_secret=${clientSecret}&scope=${scope}&grant_type=${grantType}`,
//             {
//               headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//               },
//             }
//           );

//           // Access the token from the response
//           const accessToken = response.data.access_token;
//           console.log('Access Token:', accessToken);
//           return accessToken;
//         }
//     catch (error) {
//         console.log(error,"000")
//         return res.status(500).json({
//             message: "Internal server error!,", error,
//             status: 500,

//         })
//     }

// }
const getToken = async (req, res) => {
    const tenantId = req.body.tenatId;
    const clientId = process.env.CLIENTID;
    const clientSecret = process.env.CLIENTSECRET;
    const scope = process.env.SCOPE; // e.g., 'https://graph.microsoft.com/.default'
    const grantType = process.env.GRANT_TYPE;

    const requestBody = new URLSearchParams();
    requestBody.append('client_id', clientId);
    requestBody.append('client_secret', clientSecret);
    requestBody.append('scope', scope);
    requestBody.append('grant_type', grantType);

    try {
        const response = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            requestBody.toString(),  // Convert URLSearchParams to string
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
                `https://graph.microsoft.com/v1.0/security/secureScores`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi, "--0-0-0-")
            let identity = newapi.data.value;
            let identityScore = 0 ;
            for(let i=0;i<identity.length;i++){
                let tenant = identity[i];
                if (tenant.azureTenantId === req.body.tenatId) {
                    let score = tenant.averageComparativeScores;
                    for(let j=0;j<score.length;j++){

                    }
                    break; 
                }

            }
            return res.status(200).json({
                message: "Data fetched successfully",
                data: identityScores,
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

module.exports = {
    createUser,
    login,
    getAllThirdData,
    getToken
}
