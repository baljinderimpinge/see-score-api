const { Sequelize } = require("sequelize");

const db = require("../connection/db");
const securityChecklist = require("./securitychecklist"); 
const Customer = require('./customer.model')

const customerSecurityChecklist = db.sequelize.define("securityChecklist", {
    email: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    securityChecklistId:{
        type: Sequelize.INTEGER, // Assuming customerId is an integer (adjust the type accordingly)
        allowNull: false,
        references: {
            model: securityChecklist, // Reference to the Customer model
            key: 'id' // The column in the Customer model to reference
        }
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
   
});

module.exports = customerSecurityChecklist;