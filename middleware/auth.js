const user= require("../models/customer.model");
const auth = require("../middleware/jwttoken")
const common = require("../common")


const adminAuth = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization;
            console.log(token, "*****");
            if (token.startsWith("Bearer")) {
                token = token.substr("Bearer".length + 1);
            }

            const decoded = await auth.jwtVerify(token);
            console.log(decoded, "00--");

            if (!decoded) {
                return res.status(401).json({ error: "Invalid token" });
            }

            const admin = await user.findOne({
                where: {
                    id: decoded._id,
                    role: common.constant.CONSTANTS.ADMIN
                }
            });

            console.log(admin, "--++++");

            if (admin) {
               
                req.admin = admin;
                next(); 
            } else {
                return res.status(403).json({ error: "Unauthorized" });
            }
        } else {
            return res.status(401).json({ error: " Auth Token is missing" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const checkRole = (allowedRoles) => {
    return async(req, res, next) => {
        try {
          console.log(allowedRoles)
            const userRole = req.admin.role; 
console.log(userRole)
            if (allowedRoles.includes(userRole)) {
                next();
            } else {
                return res.status(403).json({ error: "Insufficient permissions" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };
};

module.exports={
    adminAuth,
     checkRole 

}