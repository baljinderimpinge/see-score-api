const express = require("express");
const router = express.Router()
const {admin} = require("../controllers")
const middleware = require("../middleware/auth")

router.post("/login",admin.login)
router.post("/register",admin.createUser)
//router.post("/register",middleware.adminAuth,middleware.checkRole(["1"]),admin.createUser)
router.get("/users",middleware.adminAuth,middleware.checkRole(["1"]),admin.getAllUsers)
router.get("/user/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.getUserById)
router.put("/user/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.updateUser)
router.delete("/user/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.deleteUser)
//router.delete("/user/:id",admin.deleteUser)

router.post("/subscription",middleware.adminAuth,middleware.checkRole(["1"]),admin.createSubscription)
router.get("/subscription",middleware.adminAuth,middleware.checkRole(["1"]),admin.getAllSubscription)
router.get("/subscription/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.getSubscriptionById)
router.put("/subscription/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.updateSubscription)
router.delete("/subscription/:id",middleware.adminAuth,middleware.checkRole(["1"]),admin.deleteSubscription)

router.post("/changepassword",middleware.adminAuth,middleware.checkRole(["1"]),admin.changePassword)

router.post("/authCustomer",admin.createCustomer)
router.get("/getallcustomers",admin.getAllCustomers)


module.exports = router