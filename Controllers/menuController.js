const Menu = require("../Models/menuModel");
const Restaurant = require("../Models/restaurantModel");
exports.create = async (req, res) => {
  try {
    const find = await Restaurant.findOne({ user: req.user.id });
    req.body.image = req.file.filename;
    req.body.restaurant = find._id;

    await Menu.create(req.body);
    res.status(200).json({ message: "created menu" });
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};

exports.get = async (req, res) => {
  try {
    const find = await Restaurant.findOne({ user: req.user.id }); //loggedin users restaurant
    const menu = await Menu.find({ restaurant: find._id });
    res.status(200).json({ message: "found", menu: menu });
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.status(200).json({ message: "found", menu });
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};

exports.edit = async (req, res) => {
  try {
    await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "editied menu item" });
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};

exports.delete = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted" });
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};
