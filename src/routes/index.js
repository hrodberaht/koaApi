const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", ctx => {
  ctx.body = { message: "hello" };
});

router.get("/api/v1", ctx => {
  ctx.status = 200;
  ctx.body = { message: "works" };
});

module.exports = router;
