const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample product data
let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});