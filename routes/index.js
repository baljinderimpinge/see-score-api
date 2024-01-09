const express = require("express");
const router = express.Router()
const customerRouter = require("./customer.route")
const admin = require("./admin.route")

router.use("/user",customerRouter)
router.use("/admin",admin)

module.exports = router