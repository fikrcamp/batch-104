const mongoose = require("mongoose");

const orderScehma = mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  payment: String,
  cart: [Object],
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurants",
  },
});

const orderModel = mongoose.model("Order", orderScehma);

module.exports = orderModel;
