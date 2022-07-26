const express = require("express");
const { upload } = require("../Utils/multer");
const restaurantController = require("../Controllers/restaurantController");
const userController = require("../Controllers/userController");
const router = express.Router();

router
  .route("/user")
  .get(userController.protect, restaurantController.getUsersRestaurant);

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
  .put(upload.single("image"), restaurantController.edit)
  .delete(restaurantController.delete);

module.exports = router;
