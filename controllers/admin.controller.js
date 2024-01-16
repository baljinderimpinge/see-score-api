
const { userModel, subscriptionModel } = require("../models")
const { Op } = require("sequelize");
const Joi = require("joi")
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const auth = require("../middleware/jwttoken")
const common = require("../common")
const { Sequelize } = require('sequelize');
const axios = require('axios');
const template = require('../template/email')



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



const login = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        email: Joi.string().email().optional(),
        password: Joi.string().required(),
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
        console.log("-----", common.constant.CONSTANTS.ADMIN)
        const existingUser = await userModel.findOne({
            where: {

                email: userPayload.email,
                role: common.constant.CONSTANTS.ADMIN

            },
        })
        if (!existingUser) {
            return res.status(409).json({
                message: "user doesn't exists",
                status: 409
            })
        } else {
            console.log(userPayload.password,"userPayload.password")
            console.log(existingUser.password,"existingUser.password")
            const encryptedPass = await bcrypt.compare(userPayload.password, existingUser.password);
            console.log(encryptedPass,"lhlhlhlh")
            if (encryptedPass) {
                const token = await auth.jwtSign({ _id: existingUser.id, role: existingUser.role, email: existingUser.email });
                return res.status(200).json({
                    message: "Login successfully",
                    data: { user: existingUser, token },
                    status: 200
                });
            } else {
                return res.status(401).json({
                    message: "Invalid password",
                    status: 401
                });
            }

        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,", error,
            status: 500,

        })
    }

}

const getAllUsers = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let size = parseInt(req.query.size) || 10;
        let skip = (page - 1) * size;

        let qry = {
            role: common.constant.CONSTANTS.CUSTOMER,
            isDeleted: false
        };

        if (req.query.search) {
            qry[Sequelize.Op.or] = [
                {
                    firstName: {
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
console.log(users,"------")
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
};


const getUserById = async (req, res) => {
    try {
        const users = await userModel.findOne({
            where: {

                id: req.params.id,
                role: common.constant.CONSTANTS.CUSTOMER

            },
        });
        if (!users) {
            return res.status(409).json({
                message: "user doesn't exists",
                status: 409
            })
        }
        return res.status(200).json({
            message: "data fetched successfully",
            data: users,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,", error,
            status: 500,

        })
    }

}

const updateUser = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(20).optional(),
        lastName: Joi.string().min(3).max(20).allow("", null),
        email: Joi.string().email().optional(),
        password: Joi.string().optional(),
        subdomain: Joi.string().optional(),
        status: Joi.boolean().optional(),
        role: Joi.number().valid(1, 2).optional(),
        isDeleted: Joi.boolean().optional(),
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
        const existingUser = await userModel.findOne({
            where: {

                id: req.params.id,
                role: common.constant.CONSTANTS.CUSTOMER

            },
        });
        if (!existingUser) {
            return res.status(409).json({
                message: "user doesn't exists",
                status: 409
            })
        }
        else {
            const result = await existingUser.update(userPayload);

            return res.status(200).json({
                message: "user updated Successfully",
                data: result,
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


const deleteUser = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({
            where: {
                id: req.params.id,
                role: common.constant.CONSTANTS.CUSTOMER,
                isDeleted: false
            },
        });

        if (!existingUser) {
            return res.status(409).json({
                message: "User doesn't exist",
                status: 409
            });
        } else {
            const result = await userModel.update({ isDeleted: true }, { where: { id: req.params.id } });


            return res.status(200).json({
                message: "User deleted successfully",
                data: result,
                status: 200
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500,
        });
    }
};


const changePassword = async (req, res) => {
    let data = req.body;
    console.log(req.admin,"000909090")
    const userSchema = Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required(),
    });

    let schemaValidator = userSchema.validate(data);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400
        });
    } else {
        userPayload = schemaValidator.value;
    }

    try {
        const userId = req.admin.id; 
       const existingUser = await userModel.findOne({
        where: {
            id: userId,
            role: common.constant.CONSTANTS.ADMIN

        },
    })
    // $2b$10$5RaJTY81g2hFkrtRhK.0uuruJ5kKMolo/NYa2hd.3virdcUpOY27G
      console.log(existingUser,"existingUser")
        if (existingUser) {
            const oldPasswordMatch = await bcrypt.compare(userPayload.oldPassword, existingUser.password);
            console.log(userPayload.oldPassword,"----userPayload.oldPassword-----")
            console.log(existingUser.password,"----existingUser.password.oldPassword-----")
            if (oldPasswordMatch) {
                
                const encryptedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
                console.log(encryptedNewPassword,"en")
                let  updated = await userModel.update({ password: encryptedNewPassword }, { where: { id: userId } });
                return res.status(200).json({
                    message: "User password changed successfully",
                    data:updated,
                    status: 200,
                });
            } else {
                return res.status(401).json({
                    message: "Old password does not match",
                    status: 401,
                });
            }
        } else {
            return res.status(404).json({
                message: "User not found",
                status: 404,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500,
        });
    }
};

// const forgotpassword = async (req, res) => {
//     let data = req.body;
//     const resetLink = "https://example.com/reset-password";
// const expirationTime = 60; 
// const emailTemplate = generateForgotPasswordEmail(resetLink, expirationTime);

//     console.log(req.admin,"000909090")
//     const userSchema = Joi.object({
//         oldPassword: Joi.string().required(),
//         newPassword: Joi.string().required(),
//     });

//     let schemaValidator = userSchema.validate(data);
//     if (schemaValidator.error) {
//         return res.status(400).json({
//             message: "Invalid payload",
//             error: schemaValidator.error.message,
//             status: 400
//         });
//     } else {
//         userPayload = schemaValidator.value;
//     }

//     try {
//         const userId = req.admin.id; 
//        const existingUser = await userModel.findOne({
//         where: {
//             id: userId,
//             role: common.constant.CONSTANTS.ADMIN

//         },
//     })
//     // $2b$10$5RaJTY81g2hFkrtRhK.0uuruJ5kKMolo/NYa2hd.3virdcUpOY27G
//       console.log(existingUser,"existingUser")
//         if (existingUser) {
//             const oldPasswordMatch = await bcrypt.compare(userPayload.oldPassword, existingUser.password);
//             console.log(userPayload.oldPassword,"----userPayload.oldPassword-----")
//             console.log(existingUser.password,"----existingUser.password.oldPassword-----")
//             if (oldPasswordMatch) {
                
//                 const encryptedNewPassword = await bcrypt.hash(req.body.newPassword, saltRounds);
//                 console.log(encryptedNewPassword,"en")
//                 let  updated = await userModel.update({ password: encryptedNewPassword }, { where: { id: userId } });
//                 return res.status(200).json({
//                     message: "User password changed successfully",
//                     data:updated,
//                     status: 200,
//                 });
//             } else {
//                 return res.status(401).json({
//                     message: "Old password does not match",
//                     status: 401,
//                 });
//             }
//         } else {
//             return res.status(404).json({
//                 message: "User not found",
//                 status: 404,
//             });
//         }
//     } catch (error) {
//         return res.status(500).json({
//             message: "Internal server error!",
//             error,
//             status: 500,
//         });
//     }
// };



const createSubscription = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        subscriptionName: Joi.string().min(3).max(20).optional(),
        subscriptionStart: Joi.date().iso().optional(),
        subscriptionEnd:Joi.date().iso().optional(),
        customerId: Joi.number().integer().optional(),
      
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

        const checkData = await subscriptionModel.findAll({
            where: {
                [Op.or]: {
                    subscriptionName: userPayload.subscriptionName
                },
            },
        });
        if (checkData && checkData.length !== 0) {
            return res.status(409).json({
                message: "subscription is already exists",
                status: 409
            })
        } else {
            
            const result = await subscriptionModel.create(userPayload)
            return res.status(200).json({
                message: "subscription created Successfully",
                data: result,
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



const getAllSubscription = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let size = parseInt(req.query.size) || 10;
        let skip = (page - 1) * size;

        let qry = {
            isDeleted: false
        };

        if (req.query.search) {
            qry[Sequelize.Op.or] = [
                {
                    subscriptionName: {
                        [Sequelize.Op.like]: `%${req.query.search}%`
                    }
                }
            ];
        }
        

        const { rows: users, count: total } = await subscriptionModel.findAndCountAll({
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
};


const getSubscriptionById = async (req, res) => {
    try {
        const users = await subscriptionModel.findOne({
            where: {
                id: req.params.id
            },
        });
        if (!users) {
            return res.status(409).json({
                message: "subscription doesn't exists",
                status: 409
            })
        }
        return res.status(200).json({
            message: "data fetched successfully",
            data: users,
            status: 200
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!,", error,
            status: 500,

        })
    }

}

const updateSubscription = async (req, res) => {
    let data = req.body;
    const userSchema = Joi.object({
        subscriptionName: Joi.string().min(3).max(20).optional(),
        subscriptionStart: Joi.date().iso().optional(),
        subscriptionEnd:Joi.date().iso().optional()
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
        const existingUser = await subscriptionModel.findOne({
            where: {

                id: req.params.id,
            },
        });
        if (!existingUser) {
            return res.status(409).json({
                message: "subscription doesn't exists",
                status: 409
            })
        }
        else {
            const result = await existingUser.update(userPayload);

            return res.status(200).json({
                message: "subscription updated Successfully",
                data: result,
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


const deleteSubscription = async (req, res) => {
    try {
        const existingUser = await subscriptionModel.findOne({
            where: {
                id: req.params.id,
                isDeleted: false
            },
        });

        if (!existingUser) {
            return res.status(409).json({
                message: "subscription doesn't exist",
                status: 409
            });
        } else {
            const result = await subscriptionModel.update({ isDeleted: true }, { where: { id: req.params.id } });


            return res.status(200).json({
                message: "subscription deleted successfully",
                data: result,
                status: 200
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!",
            error,
            status: 500,
        });
    }
};


const createCustomer = async (req, res) => {
    try {
        console.log(req.body,"----")
        if(req.body.contactEmail==""){
            return res.status(500).json({
                message: "please enter a user email", 
                status: 500,
    
            })
        }
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
            const newapi = await axios.post(
                `https://dev-3hmsijzw0t7ryxrl.us.auth0.com/api/v2/users`,
                {
                    "email":req.body.contactEmail,
                    "password":random,
                   
                    "connection": "Username-Password-Authentication",
                    "app_metadata": {
                        "bussinessName": req.body.businessName,
                        "bussinessAddress":req.body.businessAddress,
                        "website":req.body.website,
                        "industry":req.body.industry,
                        "phone":req.body.contactNumber,
                        "name":req.body.contactName,
                        "role":"Customer"
                    }
                },

                {
                    headers: {
                        'Authorization': `Bearer ${newtoken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(newapi.data,"---=-=-=")
             template.newaccountPassword(req.body.contactEmail,random);
            return res.status(200).json({
                message: "user created Successfully",
                //data: newapi.data,
                status: 200
            })
    } catch (error) {
        console.log(error,"----+++++")
//     if(error.response.data.message = "The user already exists."){
//         console.log("----")
//         return res.status(500).json({
//             message: "The user already exists", 
//             error:"AxiosError",
//             status: 500,

//         })
// }
        return res.status(500).json({
            message: "Internal server error!,", 
            error:"AxiosError",
            status: 500,

        })
    }

}


module.exports = {
    createUser,
    login,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    changePassword,
    createSubscription,
    getAllSubscription,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription,
    createCustomer
}
