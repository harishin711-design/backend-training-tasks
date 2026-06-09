const express = require("express");
const router = express.Router();

const {
  createCart,
  getCart
} = require("../controllers/cartController");


router.post("/cart", createCart);
router.get("/cart", getCart);

module.exports = router;