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

async function create(ctx) {
  ctx.status = 201;
  console.log(ctx.request.body);
}

module.exports = {
  findAll,
  create
};
