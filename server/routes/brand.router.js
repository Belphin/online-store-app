const Router = require("express");
const brandController = require("../controllers/brand.controller");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), brandController.create);
router.get("/", brandController.getAll);
router.delete("/:id", checkRoleMiddleware("ADMIN"), brandController.delete);

module.exports = router;
