const express = require("express");

const restaurantController = require("../Controllers/restaurantController");
const router = express.Router();

router
  .route("/")
  .post(restaurantController.create)
  .get(restaurantController.getAll);

router
  .route("/:id")
  .get(restaurantController.getOne)
  .put(restaurantController.edit)
  .delete(restaurantController.delete);

module.exports = router;
