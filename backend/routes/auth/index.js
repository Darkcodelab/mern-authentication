const router = require("express").Router();

// controllers
const {
  handleLogin,
  handleRegister,
} = require("../../controllers/authController");

// @route  /auth/login
// @method POST
router.post("/login", handleLogin);

// @route  /auth/register
// @method POST
router.post("/register", handleRegister);

module.exports = router;
