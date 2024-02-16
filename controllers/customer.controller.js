const {
    userModel,
    subscriptionModel,
    userTokenmodel,
    securityChecklist,
    customerSecurityChecklist,
} = require("../models");
const { Op } = require("sequelize");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const auth = require("../middleware/jwttoken");
const common = require("../common");
let datapart = require("./data");
const { ConfidentialClientApplication } = require("@azure/msal-node");
const { GraphRbacManagementClient } = require("@azure/graph");
const { ClientSecretCredential } = require("@azure/identity");
const { DefaultAzureCredential } = require("@azure/identity");
const { Client } = require("@microsoft/microsoft-graph-client");

const axios = require("axios");
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
    });

    let schemaValidator = userSchema.validate(data);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400,
        });
    } else {
        userPayload = schemaValidator.value;
    }
    try {
        const checkData = await userModel.findAll({
            where: {
                [Op.or]: {
                    email: userPayload.email,
                },
            },
        });
        if (checkData && checkData.length !== 0) {
            return res.status(409).json({
                message: "user is already exists",
                status: 409,
            });
        } else {
            const encryptedPass = await bcrypt.hash(
                userPayload.password,
                saltRounds
            );
            userPayload["password"] = encryptedPass;
            const payload = {
                ...userPayload,
                creationTs: Date.now(),
                isEmailVerify: true,
            };
            const result = await userModel.create(payload);
            const token = await auth.jwtSign({
                _id: result._id,
                role: result.role,
                email: result.role,
            });
            return res.status(200).json({
                message: "user created Successfully",
                data: { user: result, token },
                status: 200,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,",
            error,
            status: 500,
        });
    }
};

const login = async (req, res) => {
    try {
        let token = req.body.token;
        let publickey = process.env.PUBLICKEY;
        const decoded = await auth.jwtAuthVerify(token, publickey);
        const tokenapi = await axios.post(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/oauth/token`,
            {
                client_id: process.env.AUTH_TOKEN_CLIENT_ID,
                client_secret: process.env.AUTH_TOKEN_CLIENT_SECRET,
                audience: process.env.AUTH_TOKEN_AUDIENCE,
                grant_type: process.env.AUTH_TOKEN_GRANT_TYPE,
            },

            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let newtoken = tokenapi.data.access_token;
        const newapi = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users/${decoded.sub}`,

            {
                headers: {
                    Authorization: `Bearer ${newtoken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        let datamain = newapi.data;
        const userrole = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users/${datamain.user_id}/roles`,

            {
                headers: {
                    Authorization: `Bearer ${newtoken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        datamain.role = "";
        if (userrole.data.length != 0) {
            const roles = userrole.data[0].name.trim();
            datamain.role = roles;
            // datamain.app_metadata.role = roles;
        }
        return res.status(200).json({
            message: "Login successfully",
            data: datamain,
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,",
            error,
            status: 500,
        });
    }
};

const getAllThirdData = async (req, res) => {
    try {
        let data = await datapart.dataPart();
        return res.status(200).json({
            message: "Data fetched successfully",
            data: data.value,
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500,
        });
    }
};

const getSecureScores = async (req, res) => {
    const token = req.body.token
    const useremail = req.body.email;
    try {
        axios
            .get(`https://graph.microsoft.com/v1.0/security/secureScores`, {
                headers: {
                    Authorization: `Bearer ${token}`,
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
            ).then(async (result) => {
                let securityhealthcount = 0;
                if (useremail) {
                    securityhealthcount = await customerSecurityChecklist.count({
                        where: {
                            email: useremail,
                            status: 1
                        }
                    });
                }
                const newdata = data?.data?.value[0]?.controlScores;
                const activeObjects = newdata?.filter(obj => obj.controlName === 'UserRiskPolicy');
                const activestatus = result.data.value;
                const activeObjects1 = activestatus.filter(obj => obj.status === 'active');
                let overallcount = activeObjects1.length + securityhealthcount;
                return res.status(200).json({
                    message: " fetching data",
                    data: activeObjects,
                    findingCount: overallcount,
                    status: 200
                });
            }).catch((error) => {
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
    } catch (error) {
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
    requestBody.append("client_id", clientId);
    requestBody.append("client_secret", clientSecret);
    requestBody.append("scope", scope);
    requestBody.append("grant_type", grantType);
    try {
        const response = await axios.post(
            `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            requestBody.toString(),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        // Access the token from the response
        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        return error;
    }
};




const getRecomendations = async (req, res) => {
    try {
        const existingUser = await userTokenmodel.findOne({
            where: {
                email: req.body.email,
                isDeleted: false,
            },
        });
        if (existingUser) {
            const token = existingUser.dataValues.token;
            const newapi = await axios.get(
                `https://graph.microsoft.com/beta/directory/recommendations`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            let activestatus = newapi.data.value;
            const activeObjects = activestatus.filter(obj => obj.status === 'active');
            if (req.query.id) {
                let checkid = req.query.id;
                let datasend = activeObjects.filter(
                    (obj) => obj.id === checkid
                );
                const filteredData = datasend.map((obj) => ({
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
                    status: 200,
                });
            }
            else {
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
                    status: 200,
                });
            }
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};

const createAzureToken = async (req, res) => {
    try {
        let result;
        const userPayload = {
            email: req.body.email,
            token: req.body.token,
            userId: req.body.userId,
            expires_in: req.body.expires_in,
            refresh_token: req.body.refresh_token,
            tokentimestamp: new Date().getTime()
        }
        const existingUserToken = await userTokenmodel.findOne({
            where: {
                userId: req.body.userId,

            },
        });
        if (!existingUserToken) {
            result = await userTokenmodel.create(userPayload);
            await addSecurity(req.body.email);
            return res.status(200).json({
                message: "token updated Successfully",
                data: result,
                status: 200,
            });
        }
        return res.status(200).json({
            message: "token updated Successfully",
            data: existingUserToken,
            status: 200,
        });
    } catch (error) {
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
            isDeleted: false,
        },
    });
    if (existingSecurity.length == 0) {
        let securityId = await securityChecklist.findAll();
        const uniqueSecurityIds = {};
        securityId.forEach((securityId) => {
            uniqueSecurityIds[securityId.id] = true;
        });

        for (const id in uniqueSecurityIds) {
            let securityPayload = {
                email: email,
                securityChecklistId: id,
            };
            let securitycheck = await customerSecurityChecklist.create(
                securityPayload
            );
            return true;
        }
    }
};

const getAzureToken = async (req, res) => {
    try {
        const existingUserToken = await userTokenmodel.findOne({
            where: {
                userId: req.params.userId,
            },
        });
        if (existingUserToken) {
            return res.status(200).json({
                message: "Data fetched successfully",
                data: existingUserToken,
                status: 200,
            });
        } else {
            return res.status(200).json({
                message: "Token  not found",
                data: [],
                status: 400,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};

const get90daysdata = async (req, res) => {
    try {
        const existingUser = await userTokenmodel.findOne({
            where: {
                email: req.body.email,
                isDeleted: false,
            },
        });

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found",
                status: 404,
            });
        }

        const token = existingUser.token;
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 90); // Subtract 90 days from the current date
        const formattedDate = currentDate.toISOString();

        const newapi = await axios.get(
            `https://graph.microsoft.com/v1.0/security/secureScores?$filter=createdDateTime ge ${formattedDate}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const data = newapi.data;
        let activeObjects = [];

        if (data && data.value && Array.isArray(data.value)) {
            data.value.forEach(item => {
                const date = new Date(item.createdDateTime);
                const filteredScores = item.controlScores.filter(obj => obj.controlName === 'UserRiskPolicy')
                    .map(score => ({ ...score, date }));
                activeObjects = activeObjects.concat(filteredScores);
            });
        }

        const filteredData = activeObjects.map((obj) => ({
            date: obj.date,
            scoreInPercentage: obj.scoreInPercentage
        }));

        const filteredData1 = filteredData.map((obj) => {
            const australiaDate = new Date(obj.date);
            const australiaOptions = {
                timeZone: 'Australia/Sydney',
                month: "2-digit",
                day: "2-digit",
                year: "numeric"
            };

            const formattedDate = australiaDate.toLocaleDateString("en-US", australiaOptions);

            return {
                x: formattedDate,
                y: obj.scoreInPercentage
            };
        });

        return res.status(200).json({
            message: "Data fetched successfully",
            data: filteredData1,
            status: 200,
            last_update: filteredData1.length > 0 ? filteredData1[0].x : null,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error.message,
            status: 500,
        });
    }
};


const addSecurityChecklist = async (req, res) => {
    try {
        const payload = {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
        };
        const result = await securityChecklist.create(payload);
        return res.status(200).json({
            message: "token updated Successfully",
            data: result,
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};

const getSecurityChecklist = async (req, res) => {
    try {
        customerSecurityChecklist.belongsTo(securityChecklist, {
            foreignKey: "securityChecklistId",
        });
        const result = await customerSecurityChecklist.findAll({
            where: {
                email: req.body.email,
            },
            include: [{
                model: securityChecklist,
                required: false
            }],
        });
        const formattedResult = result.map((item) => ({
            email: item.email,
            title: item.SecurityChecklist.title,
            description: item.SecurityChecklist.description,
            securityid: item.SecurityChecklist.id,
            status: item.status,
            id: item.id,
        }));
        return res.status(200).json({
            message: "security checklist fetched Successfully",
            data: formattedResult,
            status: 200,
        });
    } catch (error) {
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
                securityChecklistId: req.body.securityChecklistId,
            },
        };
        let payload = {
            status: req.body.status,
        };
        let security = await customerSecurityChecklist.update(
            payload,
            condition
        );
        return res.status(200).json({
            message: "token updated Successfully",
            data: security,
            status: 200,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error,
            status: 500,
        });
    }
};



const changepassword = async (req, res) => {
    try {
        if (req.body.contactEmail == "") {
            return res.status(500).json({
                message: "please enter a user email",
                status: 500,
            })
        }
        let useremail = req.body.email;
        const passApi = await axios.post(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/dbconnections/change_password`,
            {

                "client_id": process.env.AUTH_TOKEN_CLIENT_ID,
                "email": useremail,
                "connection": "Username-Password-Authentication"

            },
        );
        return res.status(200).json({
            message: "Email for reset your password has been sent",
            status: 200
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,",
            error: "AxiosError",
            status: 500,

        })
    }

}

module.exports = {
    login,
    getAllThirdData,
    getSecureScores,
    getRecomendations,
    createAzureToken,
    get90daysdata,
    addSecurityChecklist,
    getSecurityChecklist,
    updateSecurityChecklist,
    getAzureToken,
    changepassword
};


