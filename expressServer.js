const express = require("express");

const app = express();

const PORT = 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Express.js Server!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});