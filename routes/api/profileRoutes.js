const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router
  .route("/")
  .post(profileController.create);

router
  .route("/:id")
  .get(profileController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
