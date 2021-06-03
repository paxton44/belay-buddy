const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const profileRoutes = require("./profileRoutes")

// users routes
router.use("/users", usersRoutes);
// profile routes
router.use("/userprofile", profileRoutes);

module.exports = router;
