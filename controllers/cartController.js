const Cart = require("../models/cart");

const createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);

    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const carts = await Cart.find();

    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getCart
};