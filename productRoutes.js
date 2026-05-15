const express = require("express");

const app = express();

const PORT = 3000;

// Sample product data
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Headphones" }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});