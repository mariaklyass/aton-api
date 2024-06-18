const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router
  .route("/")
  .get(usersController.getAllUsers)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

router.post("/register", usersController.createNewUser);
router.post("/login", usersController.loginUser);

module.exports = router;
