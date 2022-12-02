const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const sendError = require("../utils/sendError");

/*
  @route /auth/login
  @method POST
*/
const handleLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    sendError(401, "Please include all fields: email, password.", res);
  }
  const userFromDB = await User.findOne({ email });
  if (!userFromDB) {
    sendError(401, "Invalid credentials", res);
  }
  if (await bcrypt.compare(password, userFromDB.password)) {
    const user = userFromDB.toObject();
    delete user.password;
    res.status(200).json({
      success: true,
      user,
      token: jwt.sign(user, JWT_SECRET_KEY),
    });
  } else {
    sendError(401, "Invalid credentials", res);
  }
});

/*
  @route /auth/register
  @method POST
*/
const handleRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    sendError(
      401,
      "Please include all these fields: name, email, password.",
      res
    );
  }
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    sendError(400, "User already exists", res);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  let newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (!newUser) {
    sendError(500, "User registration failed.", res);
  }
  newUser = newUser.toObject();

  delete newUser.password;
  res.status(200).json({
    success: true,
    user: newUser,
    token: jwt.sign(newUser, JWT_SECRET_KEY),
  });
});

module.exports = {
  handleLogin,
  handleRegister,
};
