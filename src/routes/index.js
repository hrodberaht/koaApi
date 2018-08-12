module.exports = router => {
  router.get("/", ctx => {
    ctx.body = { message: "hello" };
  });

  router.get("/api/v1", ctx => {
    ctx.status = 200;
    ctx.body = { message: "works" };
  });

  router.get("/api/v1/products", ctx => {
    ctx.status = 200;
    ctx.body = { message: "works" };
  });
};
