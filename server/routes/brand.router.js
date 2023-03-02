const Router = require("express");
const brandController = require("../controllers/brand.controller");
const router = new Router();

router.post("/", brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
