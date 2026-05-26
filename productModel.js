const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log(err);
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String
    },

    inStock: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model("Product", productSchema);

const newProduct = new Product({
    name: "Laptop",
    price: 50000,
    category: "Electronics"
});

newProduct.save()
.then(() => {
    console.log("Product saved successfully");
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});