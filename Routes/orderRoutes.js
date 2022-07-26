const express = require("express");
const orderController = require("../Controllers/orderController");
const router = express.Router();

router
  .route("/")
  .post(orderController.saveOrder)
  .get(orderController.getOrders);

router.route("/:id").delete(orderController.deleteOrder);

module.exports = router;
