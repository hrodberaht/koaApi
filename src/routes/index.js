const Product = require("../models/product");

module.exports = router => {
  // router.get("/", ctx => {
  //   ctx.body = { message: "hello" };
  // });

  // router.get("/api/v1", async ctx => {
  //   ctx.status = 200;
  //   const products = await Product.find({});
  //   ctx.body = products;
  // });

  router.use("/api/v1/products", require("./products"));
};
