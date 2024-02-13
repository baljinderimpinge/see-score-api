
const { userModel, subscriptionModel, userTokenmodel, securityChecklist, customerSecurityChecklist } = require("../models")
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
const { Client } = require("@microsoft/microsoft-graph-client");

const axios = require('axios');
const e = require("express");
const { model } = require("mongoose");

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
            `https://${process.env.AUTH_TOKEN_DOMAIN}/oauth/token`,
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
        console.log(tokenapi.data.access_token, "tokenapitokenapi")
        let random = await auth.generateRandomString(12);
        console.log(random, "---=-=-=")
        const newapi = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users/${decoded.sub}`,

            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(newapi.data, "---=-=-=")
        
        let datamain = newapi.data;
        const userrole = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users/${datamain.user_id}/roles`,

            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(userrole.data.length, "---=-=-=")
        if(userrole.data.length != 0){
        const roles = userrole.data[0].name.trim();
datamain.app_metadata.role = roles;
        }
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


const getSecureScores = async (req, res) => {
    const token = req.body.token
const useremail = req.body.email;
    try {
        axios.get(
            `https://graph.microsoft.com/v1.0/security/secureScores`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,

                },
            }
        ).then((data) => {
            
            axios.get(
                `https://graph.microsoft.com/beta/directory/recommendations`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            ).then(async(result)=>{
                let securityhealthcount = 0;
                if(useremail){
                 securityhealthcount = await customerSecurityChecklist.count({
                    where: {
                        email: useremail,
                        status:1
                    }
                });
            }
               // console.log( data.data.value," data.data.value")
                        const newdata = data?.data?.value[0]?.controlScores;
                const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
                //console.log(activeObjects, "activeObjectsactiveObjects")
                console.log(securityhealthcount,"-=-=-=")
                    const activestatus = result.data.value;
                const activeObjects1 = activestatus.filter(obj => obj.status === 'active');
                let overallcount = activeObjects1.length + securityhealthcount;
               
        
                return res.status(200).json({
                    message: " fetching data",
                    data: activeObjects,
                    findingCount:overallcount,
                    status: 200
                });
            }).catch((error)=>{
                return res.status(401).json({
                    message: "Your account is not authorized!",
                    error: error.message,
                    status: 401,
                }); 
            })
    
        }).catch((error) => {
            return res.status(401).json({
                message: "Your account is not authorized!",
                error: error.message,
                status: 401,
            });
        })

        // auth0|65c240c358f141b4ca1d82e1
        // auth0|65c240c358f141b4ca1d82e1
        
        // console.log(newapiPromise, "newapiPromise")
        // newapiPromise.then(async (newapi) => {
        //     const data = newapi.data;
        //     const newdata = data?.value[0]?.controlScores;
        //     const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
        //     console.log(activeObjects, "activeObjectsactiveObjects")
        //     const newapi1 = await axios.get(
        //         `https://graph.microsoft.com/beta/directory/recommendations`,
        //         {
        //             headers: {
        //                 'Authorization': `Bearer ${token}`,
        //                 'Content-Type': 'application/json',
        //             },
        //         }
        //     );
        //     console.log(newapi1, "newapi1newapi1")
        //     const activestatus = newapi1.data.value;
        //     const activeObjects1 = activestatus.filter(obj => obj.status === 'active');

        //     return res.status(200).json({
        //         message: "Data fetched successfully",
        //         data: activeObjects,
        //         findingCount: activeObjects1.length,
        //         status: 200
        //     });
        // }).catch(error => {
        //     console.error(error);
        //     if (error.message == "Request failed with status code 401") {
        //         return res.status(500).json({
        //             message: "Your Token is invalid or expired!",
        //             error: error.message,
        //             status: 500,
        //         });
        //     }
        //     return res.status(500).json({
        //         message: "Error fetching data",
        //         error: error.message,
        //         status: 500
        //     });
        // });
        // }
        //return accessToken;
    } catch (error) {
        // console.log(error, "000");
        if (error.message == "Request failed with status code 401") {
            return res.status(401).json({
                message: "Your Token is invalid or expired!",
                error: error.message,
                status: 401,
            });
        }
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};


const customerToken = async (id) => {
    const tenantId = id;
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
        return accessToken;



    } catch (error) {
        console.log(error, "000");
        return error;
    }
}



// const getToken = async (req, res) => {
//     // const tenantId = req.body.tenatId;
//     // const tenantId = "4cda6fa4-1377-4e12-827a-362a904d8b84";
//     //  const token = req.body.token;
//     // const tenantId = req.body.tenantID;
//     // const clientId = process.env.CLIENTID;
//     // const clientSecret = process.env.CLIENTSECRET;
//     // const scope = process.env.SCOPE;
//     // const grantType = process.env.GRANT_TYPE;

//     // const requestBody = new URLSearchParams();
//     // requestBody.append('client_id', clientId);
//     // requestBody.append('client_secret', clientSecret);
//     // requestBody.append('scope', scope);
//     // requestBody.append('grant_type', grantType);
//  const tenantId = "4cda6fa4-1377-4e12-827a-362a904d8b84";


//     try {
//         console.log(tenantId,"tenantId")
//         const token = await customerToken(tenantId)
//      console.log(token,"--------")
//             const newapiPromise =await axios.get(
//                 `https://graph.microsoft.com/v1.0/security/secureScores`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             console.log(newapiPromise.data, "newapiPromise")
//                 return res.status(200).json({
//                     message: "Data fetched successfully",
//                     data: newapiPromise.data,
//                     status: 200
//                 });
//             // newapiPromise.then(async (newapi) => {
//             //     const data = newapi.data;
//             //     const newdata = data?.value[0]?.controlScores;
//             //     const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
//             //     console.log(activeObjects, "activeObjectsactiveObjects")
//             //     const newapi1 = await axios.get(
//             //         `https://graph.microsoft.com/beta/directory/recommendations`,
//             //         {
//             //             headers: {
//             //                 'Authorization': `Bearer ${token}`,
//             //                 'Content-Type': 'application/json',
//             //             },
//             //         }
//             //     );
//             //     console.log(newapi1, "newapi1newapi1")
//             //     const activestatus = newapi1.data.value;
//             //     const activeObjects1 = activestatus.filter(obj => obj.status === 'active');

//             //     return res.status(200).json({
//             //         message: "Data fetched successfully",
//             //         data: activeObjects,
//             //         findingCount: activeObjects1.length,
//             //         status: 200
//             //     });
//             // }).catch(error => {
//             //     console.error(error);
//             //     if (error.message == "Request failed with status code 401") {
//             //         return res.status(500).json({
//             //             message: "Your Token is invalid or expired!",
//             //             error: error.message,
//             //             status: 500,
//             //         });
//             //     }
//             //     return res.status(500).json({
//             //         message: "Error fetching data",
//             //         error: error.message,
//             //         status: 500
//             //     });
//             // });

//         //return accessToken;
//     } catch (error) {
//         console.log(error, "000");
//         if (error.message == "Request failed with status code 401") {
//             return res.status(401).json({
//                 message: "Your Token is invalid or expired!",
//                 error: error.message,
//                 status: 401,
//             });
//         }
//         return res.status(500).json({
//             message: "Internal server error!",
//             error: error,
//             status: 500,
//         });
//     }
// };


const getRecomendations = async (req, res) => {
    // const tenantId = "4cda6fa4-1377-4e12-827a-362a904d8b84";
    //  const token = req.body.token;
    // const tenantId = req.body.tenantID;
    // const clientId = process.env.CLIENTID;
    // const clientSecret = process.env.CLIENTSECRET;
    // const scope = process.env.SCOPE;
    // const grantType = process.env.GRANT_TYPE;

    // const requestBody = new URLSearchParams();
    // requestBody.append('client_id', clientId);
    // requestBody.append('client_secret', clientSecret);
    // requestBody.append('scope', scope);
    // requestBody.append('grant_type', grantType);

    try {
        // const response = await axios.post(
        //     `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        //     requestBody.toString(), 
        //     {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //     }
        // );

        // // Access the token from the response
        // const accessToken = response.data.access_token;
        // console.log('Access Token:', accessToken);
        const existingUser = await userTokenmodel.findOne({
            where: {

                email: req.body.email,
                isDeleted: false
            },
        });
        console.log(existingUser, "existingUserexistingUser")
        if (existingUser) {
            // console.log("-------")
            const token = existingUser.dataValues.token;
            // console.log(token, "-------")
            const newapi = await axios.get(
                `https://graph.microsoft.com/beta/directory/recommendations`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi, "--0-0-0-")
            let activestatus = newapi.data.value;
            const activeObjects = activestatus.filter(obj => obj.status === 'active');
            console.log(activeObjects, "activeObjects")


            if (req.query.id) {
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
            else {
                // let data = activeObjects;
                const filteredData = activeObjects.map(obj => ({
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


const createAzureToken = async (req, res) => {
    console.log("createAruretoken")
    try {
        let result;
// console.log( tokentimestamp: new Date().getTime())
        const userPayload = {
            email: req.body.email,
            token: req.body.token,
            userId: req.body.userId,
            expires_in: req.body.expires_in,
            refresh_token: req.body.refresh_token,
        tokentimestamp:new Date().getTime()

            // tokentimestamp:Math.floor(new Date().getTime()/1000)
        }

        // console.log(userPayload, "userPayload")
        const existingUserToken = await userTokenmodel.findOne({
            where: {
                userId: req.body.userId,
               
            },
        });

    // console.log(existingUserToken,"existingUser")
        if (!existingUserToken) {
            result = await userTokenmodel.create(userPayload)
            await addSecurity(req.body.email)
            return res.status(200).json({
                message: "token updated Successfully",
                data: result,
                status: 200
            })
        }
        return res.status(200).json({
            message: "token updated Successfully",
            data: existingUserToken,
            status: 200
        })
    } catch (error) {
        console.log(error, "000");
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};


const addSecurity = async (email) => {
    const existingSecurity = await customerSecurityChecklist.findAll({
        where: {
            email: email,
            isDeleted: false
        }

    });
   // console.log(existingSecurity, "existingSecurity")
    if (existingSecurity.length == 0) {
        let securityId = await securityChecklist.findAll();
        const uniqueSecurityIds = {};
        securityId.forEach(securityId => {
            uniqueSecurityIds[securityId.id] = true;
        });

        for (const id in uniqueSecurityIds) {
            let securityPayload = {
                email: email,
                securityChecklistId: id
            };
            let securitycheck = await customerSecurityChecklist.create(securityPayload)
            return true
        }
    }
}

const getAzureToken = async (req, res) => {
    try {
        const existingUserToken = await userTokenmodel.findOne({
            where: {
                userId: req.params.userId,
            },
        });
        console.log(existingUserToken, "kkkkkkkkkkkkkkkkkk")
        if (existingUserToken) {
            return res.status(200).json({
                message: "Data fetched successfully",
                data: existingUserToken,
                status: 200
            });
        } else {
            return res.status(200).json({
                message: "Token  not found",
                data: [],
                status: 400
            });
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

const get90daysdata = async (req, res) => {
    // const tenantId = req.body.tenatId;

    try {
        const existingUser = await userTokenmodel.findOne({
            where: {

                email: req.body.email,
                isDeleted: false
            },
        });
        console.log(existingUser, "existingUserexistingUser")
        if (existingUser) {
            console.log("-------")
            const token = existingUser.dataValues.token;
            //const token = req.body.token;
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - 90); // Subtract 90 days from the current date
            const formattedDate = currentDate.toISOString();
            console.log(token, "-------")
            const newapi = await axios.get(
                `https://graph.microsoft.com/v1.0/security/secureScores?$filter=createdDateTime ge ${formattedDate}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
        console.log(newapi,"newapi")
            let data = newapi.data;
            let activeObjects = [];
        
            console.log(data, "-----");
        
            if (data && data.value && Array.isArray(data.value)) {
                // Iterate over each item in data.value
                data.value.forEach(item => {
                    // Extract date from the item
                    const date = item.createdDateTime;
                    // Filter controlScores for UserRiskPolicy and add date to each filtered object
                    const filteredScores = item.controlScores.filter(obj => obj.controlName === 'UserRiskPolicy')
                        .map(score => ({ ...score, date }));
                    // Concatenate filteredScores to activeObjects array
                    activeObjects = activeObjects.concat(filteredScores);
                });
            }
            const filteredData = activeObjects.map(obj => ({
                date: obj.date,
                scoreInPercentage: obj.scoreInPercentage


            }));
            const filteredData1 = filteredData.map(obj => ({
                x: new Date(obj.date).toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                }),
                y: obj.scoreInPercentage
            }));
            // console.log(filteredData1, "=-=-=-");
            // console.log()
            return res.status(200).json({
                message: "Data fetched successfully",
                data: filteredData1,
                status: 200
            });
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



const addSecurityChecklist = async (req, res) => {
    try {
        const payload = {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        };
        const result = await securityChecklist.create(payload);
        return res.status(200).json({
            message: "token updated Successfully",
            data: result,
            status: 200
        })
    } catch (error) {
        console.log(error, "000");
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    };
}



const getSecurityChecklist = async (req, res) => {
    try {
        customerSecurityChecklist.belongsTo(securityChecklist, { foreignKey: 'securityChecklistId' });
        const result = await customerSecurityChecklist.findAll({
            where: {
                email: req.body.email
            },
            include: [{
                model: securityChecklist, // Assuming SecurityChecklist is the name of the associated model
                required: false // Use 'required: false' to perform a LEFT JOIN
            }],
        });
        const formattedResult = result.map(item => ({
            email: item.email,
            title: item.SecurityChecklist.title,
            description: item.SecurityChecklist.description,
            securityid: item.SecurityChecklist.id,
            status: item.status,
            id: item.id
        }));
        return res.status(200).json({
            message: "security checklist fetched Successfully",
            data: formattedResult,
            status: 200
        })
    } catch (error) {
        console.log(error, "000");
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};



const updateSecurityChecklist = async (req, res) => {
    try {
        let condition = {
            where: {
                email: req.body.email,
                securityChecklistId: req.body.securityChecklistId
            }
        };
        let payload = {
            status: req.body.status
        }
        let security = await customerSecurityChecklist.update(payload, condition)
        return res.status(200).json({
            message: "token updated Successfully",
            data: security,
            status: 200
        })
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
    getSecureScores,
    getRecomendations,
    createAzureToken,
    get90daysdata,
    addSecurityChecklist,
    getSecurityChecklist,
    updateSecurityChecklist,
    getAzureToken
}





// { item&&item.actionSteps.length>0 && item.actionSteps((item,index)=>{
//     return(<>
// <br /> 1. Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments.</p>
//    </>
//    )
// })}