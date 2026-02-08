const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createOrder, getOrders } = require("../controllers/orderController");

router.post("/orders", auth, createOrder);
router.get("/orders", auth, getOrders);

module.exports = router;
