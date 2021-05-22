const router = require("express").Router();
const usersRoutes = require("./usersRoutes");

// Book routes
router.use("/users", usersRoutes);

module.exports = router;
