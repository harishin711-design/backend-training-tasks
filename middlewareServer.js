const express = require("express");

const app = express();

const PORT = 3000;

// Custom logging middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} request received for ${req.url}`);

  next();
};

// Use middleware
app.use(loggerMiddleware);

// Root route
app.get("/", (req, res) => {
  res.send("Middleware working successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});