const express = require("express");
const router = express.Router();
const { registerUser, loginUser,logoutUser } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");



router.post("/users", registerUser);
router.post("/users/login", loginUser);
router.post("/users/logout", auth, logoutUser);

module.exports = router;
