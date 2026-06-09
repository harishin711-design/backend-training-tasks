const express = require("express");

console.log("APP FILE LOADED");

require("./config/db");

require("./models/user");
require("./models/product");
require("./models/category");
require("./models/cart");
require("./models/order");

const mongoose = require("mongoose");

console.log("Registered Models:", mongoose.modelNames());

const app = express();

app.use(express.json());

// Test Route
app.get("/test", (req, res) => {
  res.send("Working");
});

// Routes (clean structure)
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // ⚠️ demo user (no DB check yet)
  const user = {
    id: 1,
    name: "Test User",
    role: "user"
  };

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

  res.json({
    message: "Login successful",
    token
  });
});