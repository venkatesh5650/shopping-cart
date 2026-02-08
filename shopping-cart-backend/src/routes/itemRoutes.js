const express = require("express");
const router = express.Router();
const { createItem, getItems } = require("../controllers/itemController");

router.post("/items", createItem);
router.get("/items", getItems);

module.exports = router;
