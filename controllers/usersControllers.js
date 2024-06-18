const User = require("../models/User");
// const Client = require("../models/Client");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();

  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

// @desc Login a user
// @route POST /users
// @access Private
const loginUser = asyncHandler(async (req, res) => {
  const { login, password } = req.body;

  const user = await User.findOne({ login });
  if (!user) {
    res.status(401).json({ message: "Invalid login" });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401).json({ message: "Invalid password" });
    return;
  }

  res.status(200).json({
    _id: user._id,
    full_name: user.full_name,
    login: user.login,
  });
});

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { full_name, login, password } = req.body;

  if (!full_name || !login || !password) {
    return res.status(400).json({ message: "All fields are requiered" });
  }

  const duplicate = await User.findOne({ login }).lean().exec();
  if (duplicate) {
    return res
      .status(409)
      .json({ message: "User with this login already exists" });
  }

  // TODO: encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);

  const userObject = { full_name, login, password: hashedPassword };
  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${full_name} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  // TODO: enable changing user data
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  // TODO: delete user data
});

module.exports = {
  getAllUsers,
  loginUser,
  createNewUser,
  updateUser,
  deleteUser,
};
