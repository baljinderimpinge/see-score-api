const express = require("express");
const router = express.Router()
const {customer} = require("../controllers")


router.post("/register",customer.createUser)
router.post("/login",customer.login)
router.get("/data",customer.getAllThirdData)
router.post("/tenantid",customer.getToken)

router.get("/recomen",customer.getRecomendations)




module.exports = router