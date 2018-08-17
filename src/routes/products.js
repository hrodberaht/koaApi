const Router = require("koa-router");
const router = new Router();
const Ctrl = require("./controllers/products");

router.get("/", Ctrl.findAll);
router.post("/", Ctrl.create);

module.exports = router.routes();
