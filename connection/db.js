
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();

const sslOptions = {
  ca: fs.readFileSync(path.join(__dirname, 'ap-southeast-2-bundle.pem')),
};

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: sslOptions,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;




//the below works but without ssl
// const Sequelize = require("sequelize");
// require("dotenv").config(); 

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
//   host: process.env.DATABASE_HOST,
//   dialect: "postgres",
//   operatorsAliases: false,
//   protocol: 'postgres',
//   dialectOptions: {
//     ssl: { rejectUnauthorized: false }
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// module.exports = db;
 


//the below was the original
/* const Sequelize = require("sequelize");

const sequelize = new Sequelize("seescore_backend", "postgres", "2rgCrUJ97itsyX0pU3Vx", {
  host: "database-1.cuoyxwab3ckc.ap-southeast-2.rds.amazonaws.com",
  dialect: "postgres",
  operatorsAliases: false,
  protocol: 'postgres', // Add this line to specify the protocol
  dialectOptions: {
    ssl: { rejectUnauthorized: false } // Add this line to disable SSL rejection
  },
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
 */