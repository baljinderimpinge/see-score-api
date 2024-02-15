const express = require("express");
const router = express.Router()
const {admin} = require("../controllers")
const middleware = require("../middleware/auth")

router.post("/register",admin.createUser)
router.post("/authCustomer",admin.createCustomer)
router.get("/getallcustomers",admin.getAllCustomers)


module.exports = router