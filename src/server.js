const Koa = require("koa");
const app = new Koa();

const port = process.env.PORT || 3000;
const indexRoute = require("./routes/index");

app.use(indexRoute.routes());

const server = app.listen(port, () => {
  console.log("server starts");
});

module.exports = server;
