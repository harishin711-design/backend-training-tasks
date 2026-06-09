const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// ADMIN ONLY
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createProduct
);

// PUBLIC (or user/admin both can view)
router.get("/", getProducts);

module.exports = router;