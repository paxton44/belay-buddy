const router = require("express").Router();
const usersRoutes = require("./usersRoutes");

// users routes
router.use("/users", usersRoutes);

module.exports = router;
