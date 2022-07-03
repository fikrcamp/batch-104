const Menu = require("../Models/menuModel");

exports.create = async (req, res) => {
  try {
    await Menu.create(req.body);
    res.status(200).json({ message: "created menu" });
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
  } catch (e) {
    res.status(404).json({ message: "Error" });
  }
};
