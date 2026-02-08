const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { itemId } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [itemId]
      });
    } else {
      cart.items.push(itemId);
      await cart.save();
    }

    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate("items");
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
