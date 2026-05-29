const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// REGISTER
app.post("/register", async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "User registered successfully"
    });
});

// LOGIN
app.post("/login", async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid password"
        });
    }

    res.json({
        message: "Login successful"
    });
});

app.listen(3000, () => {
    console.log("Auth server running");
});