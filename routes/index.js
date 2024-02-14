const express = require("express");
const router = express.Router()
const customerRouter = require("./customer.route")
const admin = require("./admin.route")

router.use("/user",customerRouter)
router.use("/admin",admin)

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'MSAL Node & Express Web App',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
    });
});

module.exports = router