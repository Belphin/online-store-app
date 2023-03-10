const Router = require("express");
const deviceController = require("../controllers/device.controller");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.delete("/:id", checkRoleMiddleware("ADMIN"), deviceController.delete);

module.exports = router;
