const Router = require("express");
const typeController = require("../controllers/type.controller");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
