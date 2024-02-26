const express = require("express");
const router = express.Router()
const {customer} = require("../controllers")
const middleware = require("../middleware/auth")

router.post("/login",customer.login)
router.get("/data",customer.getAllThirdData)
router.get("/get-azure-token/:userId",customer.getAzureToken)

router.get("/getScoreData",middleware.adminAuth,customer.getSecureScores)

router.post("/addToken",customer.createAzureToken)

router.get("/recomen",middleware.adminAuth,customer.getRecomendations)

router.post("/security",customer.addSecurityChecklist)
router.get("/getsecurity",middleware.adminAuth, customer.getSecurityChecklist)
router.put("/updatesecurity",middleware.adminAuth,customer.updateSecurityChecklist)

router.get("/graphdata",middleware.adminAuth,customer.get90daysdata)

router.post("/changepassword",customer.changepassword)
module.exports = router