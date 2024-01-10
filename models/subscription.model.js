const { Sequelize } = require("sequelize");
const Customer = require("./customer.model"); // Import your Customer model

const db = require("../connection/db");

const Subscription = db.sequelize.define("Subscriptions", {
    customerId: {
        type: Sequelize.INTEGER, // Assuming customerId is an integer (adjust the type accordingly)
        allowNull: false,
        references: {
            model: Customer, // Reference to the Customer model
            key: 'id' // The column in the Customer model to reference
        }
    },
    subscriptionName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subscriptionStart: {
        type: Sequelize.DATE, // Use DATE type for dates
        allowNull: false
    },
    subscriptionEnd: {
        type: Sequelize.DATE, // Use DATE type for dates
        allowNull: false
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
});

module.exports = Subscription;
