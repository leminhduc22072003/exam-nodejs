const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");
router.get("/",userController.get);
router.get("/create-user",userController.createForm);
router.post("/create-user/add",userController.save);

module.exports = router;