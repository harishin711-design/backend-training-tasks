const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const Product = mongoose.model("Product", productSchema);

// CREATE
app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// READ
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// UPDATE
app.put("/products/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedProduct);
});

// DELETE
app.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Product deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("CRUD API running on port 3000");
});