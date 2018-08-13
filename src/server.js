const Koa = require("koa");
const Router = require("koa-router");
const mongoose = require("mongoose");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
app.use(cors());

mongoose.connect("mongodb://localhost/storage");

const port = process.env.PORT || 3000;
require("./routes")(router);

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, () => {
  console.log("server starts");
});

module.exports = server;
