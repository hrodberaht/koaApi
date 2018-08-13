const Product = require("../../models/product");

async function findAll(ctx) {
  const products = await Product.find({});
  ctx.body = products;
}

module.exports = {
  findAll
};
