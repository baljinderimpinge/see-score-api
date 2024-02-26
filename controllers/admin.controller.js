
const { userModel, subscriptionModel, securityChecklist,
    customerSecurityChecklist, } = require("../models")
const { Op } = require("sequelize");
const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const auth = require("../middleware/jwttoken")
const common = require("../common")
const { Sequelize } = require('sequelize');
const axios = require('axios');



const createUser = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(20).required(),
        lastName: Joi.string().min(3).max(20).allow("", null),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        subdomain: Joi.string().optional(),
        picture: Joi.string().optional(),
        status: Joi.boolean().optional(),
        role: Joi.number().valid(1, 2).optional(),
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
            const token = await auth.jwtSign({ _id: result.id, role: result.role, email: result.email });
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

const createCustomer = async (req, res) => {
    try {
        if (req.body.contactEmail == "") {
            return res.status(500).json({
                message: "please enter a user email",
                status: 500,
            })
        }
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
        let random = await auth.generateRandomString(12);
        const newapi = await axios.post(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users`,
            {
                "email": req.body.contactEmail,
                "password": random,

                "connection": "Username-Password-Authentication",
                "app_metadata": {
                    "bussinessName": req.body.businessName,
                    "bussinessAddress": req.body.businessAddress,
                    "website": req.body.website,
                    "industry": req.body.industry,
                    "phone": req.body.contactNumber,
                    "name": req.body.contactName,
                    "role": "Customer"
                }
            },

            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        let createuser = newapi.data;
        console.log(createuser,"wkdwdkwlk")
        let useremail = createuser.email;
        let authid = createuser.user_id;
        const passApi = await axios.post(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/dbconnections/change_password`,
            {

                "client_id": process.env.AUTH_TOKEN_CLIENT_ID,
                "email": useremail,
                "connection": "Username-Password-Authentication"

            },
        );
        const roleApi = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/roles`,
            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        // if(roleApi)
        let desiredrole = roleApi.data.find(role => role.name === 'Customer');
        if(desiredrole){
        const assignrole = await axios.post(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/roles/${desiredrole.id}/users`,
            {
                users: [createuser.user_id]
            },

            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        }
        const userPayload = {
            authid: authid,
            email: useremail,
            name: req.body.contactName,
            picture: createuser.picture,
            bussinessName: req.body.businessName,
            bussinessAddress: req.body.businessAddress,
            website: req.body.website,
            industry: req.body.industry,
            phone: req.body.contactNumber,
            role: "Customer",
            creationTs: Date.now()
        };
        const result = await userModel.create(userPayload)
        
        return res.status(200).json({
            message: "user created Successfully and An email has been sent to the user for set up the password",
            status: 200
        })
    } catch (error) {
        console.log(error,"00000000000000000")
        return res.status(500).json({
            message: "Internal server error!,",
            error: "AxiosError",
            status: 500,

        })
    }

}




const getAllAuthCustomers = async (req, res) => {
    try {
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
        let random = await auth.generateRandomString(12);
        const newapi = await axios.get(
            `https://${process.env.AUTH_TOKEN_DOMAIN}/api/v2/users`,

            {
                headers: {
                    'Authorization': `Bearer ${newtoken}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        const customerData = newapi.data.filter(user => user.app_metadata && user.app_metadata.role === "Customer");
        return res.status(200).json({
            message: "fetched",
            data: customerData,
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

const getAllCustomers = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let size = parseInt(req.query.size) || 10;
        let skip = (page - 1) * size;

        let qry = {
            role: "Customer",
            isDeleted: false
        };

        if (req.query.search) {
            qry[Sequelize.Op.or] = [
                {
                    name: {
                        [Sequelize.Op.like]: `%${req.query.search}%`
                    }
                },
                {
                    email: {
                        [Sequelize.Op.like]: `%${req.query.search}%`
                    }
                }
            ];
        }


        const { rows: users, count: total } = await userModel.findAndCountAll({
            where: qry,
            offset: skip,
            limit: size
        });
        return res.status(200).json({
            message: "Data fetched successfully",
            data: users,
            total,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500
        });
    }

}


module.exports = {
    createUser,
    createCustomer,
    getAllCustomers,
    getAllAuthCustomers
}
