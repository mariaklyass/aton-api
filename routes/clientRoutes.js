const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

router
  .route("/")
  .get(clientsController.getAllClients)
  .patch(clientsController.updateClientStatus);

router.route("/:login").get(clientsController.getClientsByUser);

module.exports = router;
