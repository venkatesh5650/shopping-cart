const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
