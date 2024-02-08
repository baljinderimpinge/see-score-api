const { Sequelize } = require("sequelize");

const db = require("../connection/db");
const Customer = require("./customer.model"); // Import your Customer model

const UserToken = db.sequelize.define("userToken", {
    //id: { type: Sequelize.INTEGER, primaryKey: true },
   
    email: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    expires_in:{
        type: Sequelize.DATE, // Specifies a date/time
        defaultValue: null
    },
    refresh_token:{
        type: Sequelize.STRING(500000), // Adjust the length as needed
        defaultValue: null
    },
    tokentimestamp:{
        type: Sequelize.DATE, // Specifies a date/time
        defaultValue: null
    },
    token:{
        type: Sequelize.STRING(500000), // Adjust the length as needed
        defaultValue: null
    }
   
});

module.exports = UserToken;