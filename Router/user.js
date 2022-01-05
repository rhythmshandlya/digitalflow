var express = require("express"),
  router = express.Router(),
  { signup, signin } = require("../Controller/authController");
let verifyToken = require("../Middleware/authJWT");

router.post("/register", signup, function (req, res) {});

router.post("/login", signin, function (req, res) {});

router.get("/verify", verifyToken, function (req, res) {
  if (!user) {
    res.status(403).send({
      message: "Invalid JWT token",
    });
  }
  if (req.user == "admin") {
    res.status(200).send({
      message: "Congratulations! but there is no hidden content",
    });
  } else {
    res.status(403).send({
      message: "Unauthorised access",
    });
  }
});

module.exports = router;
