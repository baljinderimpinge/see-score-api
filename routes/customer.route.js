const express = require("express");
const router = express.Router()
const {customer} = require("../controllers")


router.post("/register",customer.createUser)
router.post("/login",customer.login)
router.get("/data",customer.getAllThirdData)
router.post("/tenantid",customer.getToken)

router.post("/recomen",customer.getRecomendations)
router.post("/azuread",customer.addCustomerInAzure)




module.exports = router