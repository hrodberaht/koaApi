const Koa = require("koa");
const app = new Koa();

const indexRoute = require("./routes/index");

app.use(indexRoute.routes());


const server = app.listen(3000,() => {
    console.log("server starts");
})

module.exports = server;