const express = require("express");
const multer = require("multer");
const restaurantController = require("../Controllers/restaurantController");
const userController = require("../Controllers/userController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const path = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + path);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .post(
    userController.protect,
    upload.single("image"),
    restaurantController.create
  )
  .get(restaurantController.getAll);

router
  .route("/:id")
  .get(restaurantController.getOne)
  .put(restaurantController.edit)
  .delete(restaurantController.delete);

module.exports = router;
