const Router = require("express");
const router = new Router();
const userRouter = require("./user.router");
const typeRouter = require("./type.router");
const brandRouter = require("./brand.router");
const deviceRouter = require("./device.router");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;
