const { Sequelize } = require("sequelize");

const db = require("../connection/db");

const SecurityChecklist = db.sequelize.define("SecurityChecklists", {
    //id: { type: Sequelize.INTEGER, primaryKey: true },
    title: {
        type: Sequelize.STRING,
        
    },
    description: {
        type: Sequelize.STRING,
    },
    url: {
        type: Sequelize.STRING,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
});

module.exports = SecurityChecklist;