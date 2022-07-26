const Restaurant = require("../Models/restaurantModel");
const Menu = require("../Models/menuModel");
exports.getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({
      results: restaurants.length,
      restaurants,
    });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    let restaurant = await Restaurant.findById(req.params.id);
    const menu = await Menu.find({ restaurant: restaurant._id });

    res.status(200).json({ restaurant: restaurant, menu: menu });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

exports.getUsersRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({ user: req.user.id });

    res.status(200).json({ restaurant: restaurant });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    console.log("-----------------------------------");
    req.body.image = req.file.filename;
    req.body.user = req.user.id;
    req.body.cusine = req.body.cusine.split(",");
    console.log(req.body);
    // const found = await Restaurant.findOne({ user: req.body.user });
    // if (found) {
    //   return res.status(400).json({ message: "you already have a restaurant" });
    // }
    await Restaurant.create(req.body);
    res.status(200).json({ message: "Created Restaurant" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

exports.edit = async (req, res) => {
  try {
    await Restaurant.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "updated restaurant" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted restaurant" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
};
