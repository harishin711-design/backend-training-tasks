const express = require("express");

console.log("APP FILE LOADED");

require("./config/db");

const app = express();

app.use(express.json());

// Test Route
app.get("/test", (req, res) => {
  res.send("Working");
});

// Routes
app.use("/", require("./routes/categoryRoutes"));
app.use("/", require("./routes/productRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});