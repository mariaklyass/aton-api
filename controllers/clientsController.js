const User = require("../models/User");
const Client = require("../models/Client");
const asyncHandler = require("express-async-handler");

// @desc Get all clients
// @route GET /clients
// @access Private
const getAllClients = asyncHandler(async (req, res) => {
  const clients = await Client.find().lean();

  if (!clients?.length) {
    return res.status(400).json({ message: "No clients found" });
  }

  res.json(clients);
});

// @desc Get clients by user
// @route GET /clients/{responsible_person}
// @access Private
const getClientsByUser = asyncHandler(async (req, res) => {
  const { login } = req.params;
  if (!login) {
    return res.status(400).json({ message: "User's login is required" });
  }

  const user = await User.findOne({ login }).lean().exec();
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const clients = await Client.find({
    responsible_person: user.full_name,
  }).lean();

  if (!clients?.length) {
    return res.status(400).json({ message: "No clients found" });
  }

  res.json(clients);
});

// @desc Update a client
// @route PATCH /clients
// @access Private
const updateClientStatus = asyncHandler(async (req, res) => {
  const { account_number, status } = req.body;
  if (!account_number || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const client = await Client.findOne({
    account_number: Number(account_number),
  });
  if (!client) {
    return res.status(400).json({ message: "Client not found" });
  }
  client.status = status;
  await client.save();

  res.json({
    message: `Client ${client.account_number} status updated to ${status}`,
    client,
  });
});

module.exports = {
  getAllClients,
  getClientsByUser,
  updateClientStatus,
};
