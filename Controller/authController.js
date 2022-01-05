var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../Model/user");

exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    } else {
      res.status(200).send({
        message: "User Registered successfully!",
        data: user,
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    }
    if (!user) {
      return res.status(404).send({
        message: "User Not found.",
      });
    }
    console.log(user.password);
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    console.log(process.env.API_SECRET);
    var token = jwt.sign(
      {
        id: user._id,
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400,
      }
    );
    res.status(200).send({
      user: {
        id: user._id,
        email: user.email,
      },
      message: "Login Successfully!",
      accessToken: token,
    });
  });
};
