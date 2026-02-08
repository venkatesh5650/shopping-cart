const Cart = require("../models/Cart");
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      userId,
      items: cart.items,
    });

    await Cart.deleteOne({ userId });

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate("items");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
