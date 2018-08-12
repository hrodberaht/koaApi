const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;
require("./routes")(router);

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, () => {
  console.log("server starts");
});

module.exports = server;
