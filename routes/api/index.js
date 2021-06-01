const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const profileRoutes = require("./profileRoutes");

// users routes
router.use("/users", usersRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
