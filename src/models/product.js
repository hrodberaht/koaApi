const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: "string" },
  ean: { type: "string" },
  price: { type: "number" }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = mongoose.model("Product");
