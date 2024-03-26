const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

router.route("/").post(loginLimiter, authcontroller.login);

router.route("/refresh").get(authcontroller.refresh);

router.route("/logout").post(authcontroller.logout);

module.exports = router;
