require('dotenv').config()
const express = require("express");
const { auth } = require('express-openid-connect');
const app = express();
const router = require("./routes")
const db = require("./connection/db")
const path = require('path');
const cors = require('cors')
// const config = require("./config/nodemon.dev.json")
const Sequelize = require("sequelize");
const axios = require('axios');


// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASEURL,
//     clientID: process.env.CLIENTID,
//     issuerBaseURL: process.env.ISSUER
// };

// app.use(auth(config));


app.use(cors())

app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use("/", router)


db.sequelize.sync().then(() => {
    app.listen(4003, () => {
        console.log("server is working on port 4000")
    })
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

