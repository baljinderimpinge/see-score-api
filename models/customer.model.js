const { Sequelize } = require("sequelize");

const db = require("../connection/db");

const Customer = db.sequelize.define("Customers", {
    //id: { type: Sequelize.INTEGER, primaryKey: true },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.BOOLEAN,
    },
    isEmailVerify: {
        type: Sequelize.BOOLEAN,
    },
    subdomain: {
        type: Sequelize.STRING,
    },
    picture: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.ENUM,
    values: ['1', '2'], // '1' represents ADMIN, '2' represents CUSTOMER
    defaultValue: '2'
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