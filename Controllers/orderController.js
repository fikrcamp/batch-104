const Order = require("../Models/orderModel");

exports.saveOrder = async (req, res) => {
  try {
    await Order.create(req.body);
    res.status(200).json({ message: "created order" });
  } catch (e) {
    console.log(e);
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ message: "found", orders });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "deleted" });
  } catch (e) {
    console.log(e);
  }
};
