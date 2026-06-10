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

// Routes
app.use("/", require("./routes/categoryRoutes"));
app.use("/", require("./routes/productRoutes"));
app.use("/", require("./routes/cartRoutes"));
app.use("/", require("./routes/orderRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});