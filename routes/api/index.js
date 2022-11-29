const router = require("express").Router();
const userRoutes = require("./user-routing");
const thoughtRoutes = require("./thoughts-routing");

// route use
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;
