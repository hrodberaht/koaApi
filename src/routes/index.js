const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", ctx => {
  ctx.body = { message: "hello" };
  console.log(ctx.body.message);
});

module.exports = router;
