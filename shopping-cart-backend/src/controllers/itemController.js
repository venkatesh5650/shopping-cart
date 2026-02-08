const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  try {
    const { name } = req.body;

    const item = await Item.create({ name });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
