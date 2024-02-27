const express = require("express");
const 

router = express.Router()
const customerRouter = require("./customer.route")
const admin = require("./admin.route")

router.use("/user",customerRouter)
router.use("/admin",admin)

// router.get('/', function (req, res, next) {
//     res.send('<h1>Shivani</h1>', {
//         title: 'MSAL Node & Express Web App',
//         // isAuthenticated: req.session.isAuthenticated,
//         // username: req.session.account?.username,
//     });
// });
// router.get('/', function (req, res, next) {
//     res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>MSAL Node & Express Web App</title></head><body><h1>Shivani</h1></body></html>');
// });
module.exports = router