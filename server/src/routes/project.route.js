const express = require("express");
const projectController = require("../controllers/project.controller");
const authCheck = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create",
    authCheck,
    projectController.create
);

router.get("/getAll",
    authCheck,
    projectController.getAll
);

module.exports = router;