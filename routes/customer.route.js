const express = require("express");
const router = express.Router()
const {customer} = require("../controllers")

router.post("/login",customer.login)
router.get("/data",customer.getAllThirdData)
router.get("/get-azure-token/:userId",customer.getAzureToken)

router.post("/getScoreData",customer.getSecureScores)

router.post("/addToken",customer.createAzureToken)

router.post("/recomen",customer.getRecomendations)

router.post("/security",customer.addSecurityChecklist)
router.post("/getsecurity",customer.getSecurityChecklist)
router.put("/updatesecurity",customer.updateSecurityChecklist)

router.post("/graphdata",customer.get90daysdata)


module.exports = router