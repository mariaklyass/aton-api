const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

router
  .route("/")
  .get(clientsController.getAllClients)
  // .post(clientsController)
  .patch(clientsController.updateClientStatus);
// .delete(clientsController);
router.route("/:login").get(clientsController.getClientsByUser);

module.exports = router;
