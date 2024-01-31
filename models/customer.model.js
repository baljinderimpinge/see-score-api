const { Sequelize } = require("sequelize");

const db = require("../connection/db");

const Customer = db.sequelize.define("Customers", {
    //id: { type: Sequelize.INTEGER, primaryKey: true },
    name: {
        type: Sequelize.STRING,
        
    },
    email: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    bussinessName: {
        type: Sequelize.STRING,
    },
    bussinessAddress: {
        type: Sequelize.STRING,
    },
    website: {
        type: Sequelize.STRING,
    },
    picture: {
        type: Sequelize.STRING,
    },
    industry: {
        type: Sequelize.STRING,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    },
    // subscriptionId: {
    //     type: Sequelize.INTEGER, // Assuming customerId is an integer (adjust the type accordingly)
    //     allowNull: false,
    //     references: {
    //         model: Subscription, // Reference to the Customer model
    //         key: 'id' // The column in the Customer model to reference
    //     }
    // },
});

module.exports = Customer;