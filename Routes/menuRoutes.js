const express = require("express");
const { upload } = require("../Utils/multer");
const router = express.Router();

const userController = require("../Controllers/userController");
const menuController = require("../Controllers/menuController");

router
  .route("/")
  .post(userController.protect, upload.single("image"), menuController.create)
  .get(userController.protect, menuController.get);

router
  .route("/:id")
  .get(menuController.getOne)
  .put(upload.single("image"), menuController.edit)
  .delete(menuController.delete);

module.exports = router;
