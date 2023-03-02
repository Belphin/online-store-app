const Router = require("express");
const deviceController = require("../controllers/device.controller");
const router = new Router();

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
