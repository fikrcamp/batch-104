const express = require("express");
const userController = require("../Controllers/userController");

const router = express.Router();

router.route("/signup").post(userController.signUp);

router.route("/changePassword").put(userController.changePassword);

module.exports = router;
