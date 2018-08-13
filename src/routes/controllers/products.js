const Product = require("../../models/product");

async function findAll(ctx) {
  const products = await Product.find({});
  const data = [];
  let id = 1;

  products.map(prod => {
    const product = {
      type: "products",
      id: id++,
      attributes: {
        name: prod.name,
        ean: prod.ean,
        price: prod.price
      }
    };

    data.push(product);
  });

  ctx.body = {
    data: data
  };
}

module.exports = {
  findAll
};
