const express = require("express");
const authController = require("../controllers/auth.controller");
const authCheck = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register",
    authController.register
);

router.post("/login",
    authController.login
);

router.post("/checkAuth",
    authCheck,    
    authController.checkAuth
)

router.post("/logout",
    authCheck,
    authController.logout
)

router.post("/refresh",
    authController.refreshAccessTokenController
)

module.exports = router;