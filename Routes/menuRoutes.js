const express = require("express");

const router = express.Router();

const menuController = require("../Controllers/menuController");

router.route("/").post(menuController.create);

router.route("/:id").put(menuController.edit).delete(menuController.delete);

module.exports = router;
