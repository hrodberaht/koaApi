const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: { type: string },
  ean: { type: number },
  price: { type: number }
});

const Product = mongoose.Model("Product", ProductSchema);

module.exports = mongoose.model("Product");
