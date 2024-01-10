
const Sequelize = require("sequelize");
const sequelize = new Sequelize("seeScore_backend", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;
