const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  description: String,
  address: String,
  city: String,
  image: String,
  cusine: [String],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurantModel;
