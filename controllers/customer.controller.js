
const { userModel, subscriptionModel,userTokenmodel, securityChecklist, customerSecurityChecklist } = require("../models")
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

const   getToken = async (req, res) => {
   // const tenantId = req.body.tenatId;
   
    try {
        const existingUser = await userTokenmodel.findOne({
            where: {

                email: req.body.email,
                isDeleted: false
            },
        });
        console.log(existingUser,"existingUserexistingUser")
        if(existingUser)
      {
        console.log("-------")
        const token = existingUser.token;

        const newapiPromise = axios.get(
            `https://graph.microsoft.com/v1.0/security/secureScores`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
console.log(newapiPromise,"newapiPromise")
        newapiPromise.then(async (newapi) => {
            const data = newapi.data;
            const newdata = data?.value[0]?.controlScores;
            const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
            console.log(activeObjects,"activeObjectsactiveObjects")
            const newapi1 = await axios.get(
                `https://graph.microsoft.com/beta/directory/recommendations`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi1,"newapi1newapi1")
            const activestatus = newapi1.data.value;
            const activeObjects1 = activestatus.filter(obj => obj.status === 'active');

            return res.status(200).json({
                message: "Data fetched successfully",
                data: activeObjects,
                findingCount: activeObjects1.length,
                status: 200
            });
        }).catch(error => {
            console.error(error);
            if(error.message=="Request failed with status code 401"){
                return res.status(500).json({
                    message: "Your Token is invalid or expired!",
                    error: error.message,
                    status: 500,
                });
            }
            return res.status(500).json({
                message: "Error fetching data",
                error: error.message,
                status: 500
            });
        });
    }
        //return accessToken;
    } catch (error) {
        console.log(error, "000");
        if(error.message=="Request failed with status code 401"){
            return res.status(500).json({
                message: "Your Token is invalid or expired!",
                error: error.message,
                status: 500,
            });
        }
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};



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
        console.log(existingUser,"existingUserexistingUser")
        if(existingUser)
      {
        console.log("-------")
        const token = existingUser.dataValues.token;
        console.log(token,"-------")
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


const addToken = async (req, res) => {
     try {
        let result;
        
        const userPayload = {
            email:req.body.email,
            token: req.body.token
        }
        const existingUserToken = await userTokenmodel.findOne({
            where: {

                email: req.body.email,
                isDeleted: false
            },
        });
       

       if(!existingUserToken){
        result = await userTokenmodel.create(userPayload)
    //     let update={
    //         isDeleted:true
    //     }
    //     let condition = {
    //     where: {

    //         email: req.body.email
    //     }
    // }
    //     const result1 = await userTokenmodel.update(update,condition);
     
    //      result = await userTokenmodel.create(userPayload)
         return res.status(200).json({
            message: "token updated Successfully",
            data: result,
            status: 200
        })
       }
//        const existingSecurity = await customerSecurityChecklist.findAll({
//         where: {
//             [Op.or]: {
//                 email: req.body.email,
//                 isDeleted: false
//             },
//         },
//     });
//     console.log(existingSecurity,"existingSecurity")
// if(existingSecurity.length == 0){
//     let securityId = await securityChecklist.findAll();
//     const uniqueSecurityIds = {};
//     securityId.forEach(securityId => {
//         uniqueSecurityIds[securityId.id] = true;
//     });
//     for (const id in uniqueSecurityIds) {
//         let securityPayload = {
//             email: req.body.email,
//             securityChecklistId: id
//         };
//     let securitycheck = await customerSecurityChecklist.create(securityPayload)
//     }
// }
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


 const get90daysdata = async (req, res) => {
    // const tenantId = req.body.tenatId;
    
     try {
         const existingUser = await userTokenmodel.findOne({
             where: {
 
                 email: req.body.email,
                 isDeleted: false
             },
         });
         console.log(existingUser,"existingUserexistingUser")
         if(existingUser)
       {
         console.log("-------")
         const token = existingUser.dataValues.token;
             const currentDate = new Date();
             currentDate.setDate(currentDate.getDate() - 90); // Subtract 90 days from the current date
             const formattedDate = currentDate.toISOString();
         console.log(token,"-------")
             const newapi = await axios.get(
                 `https://graph.microsoft.com/v1.0/security/secureScores?$filter=createdDateTime ge ${formattedDate}`,
                 {
                     headers: {
                         'Authorization': `Bearer ${token}`,
                         'Content-Type': 'application/json',
                     },
                 }
             );
           // console.log(newapi, "--0-0-0-")
           let data = newapi.data;
           let newdata = data?.value[0]?.controlScores;
             const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
             return res.status(200).json({
                 message: "Data fetched successfully",
                 data: activeObjects,
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
            status: item.status
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
    getToken,
    getRecomendations,
    addToken,
    get90daysdata,
    addSecurityChecklist,
    getSecurityChecklist,
    updateSecurityChecklist
}





// { item&&item.actionSteps.length>0 && item.actionSteps((item,index)=>{
//     return(<>
// <br /> 1. Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments.</p>
//    </>
//    )
// })}