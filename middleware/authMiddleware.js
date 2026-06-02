const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const SECRET_KEY = "mysecretkey";

app.use(express.json());

// JWT Middleware
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token required"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({
            message: "Invalid token"
        });
    }
}

// Protected Route
app.get("/protected", verifyToken, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

app.listen(3000, () => {
    console.log("JWT Auth Server running");
});