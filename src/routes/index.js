const Product = require("../models/product");

module.exports = router => {
  router.use("/api/v1/products", require("./products"));
};
