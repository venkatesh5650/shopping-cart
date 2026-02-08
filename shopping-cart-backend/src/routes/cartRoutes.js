const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { addToCart, getCarts } = require("../controllers/cartController");

router.post("/carts", auth, addToCart);
router.get("/carts", auth, getCarts);

module.exports = router;
