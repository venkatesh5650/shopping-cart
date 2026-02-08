const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(userRoutes);
app.use(itemRoutes);
app.use(cartRoutes);
app.use(orderRoutes);

app.get("/", (req, res) => {
  res.send("Shopping Cart API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
