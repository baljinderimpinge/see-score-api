const express = require("express");
const router = express.Router()
const {customer} = require("../controllers")


router.post("/register",customer.createUser)
router.post("/login",customer.login)
router.get("/data",customer.getAllThirdData)
router.post("/getScoreData",customer.getToken)

router.post("/addToken",customer.addToken)

router.post("/recomen",customer.getRecomendations)




module.exports = router