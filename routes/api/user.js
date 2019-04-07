const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { auth } = require("../../helper/auth");
const signupValidation = require("../../validation/signup");
const signinValidation = require("../../validation/signin");
const { generateUserAvatar } = require("../../helper/auth");
// const { getSystemInfo } = require("../../helper/user");
const { jwtSecret } = require("../../config/keys");

const User = require("../../models/User");
// const Session = require("../../models/LoggedInSession");

// @route GET api/user/auth
// To verfiy auth
router.get("/auth", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user))
    .catch(err => res.status(401).json(err));
});

// @route POST api/user/signup
// Signup a user
router.post("/signup", (req, res) => {
  const { err, isValid } = signupValidation(req.body);
  if (!isValid) return res.status(400).json(err);

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      err.username = "User already exists.";
      return res.status(400).json(err);
    } else {
      const avatar = generateUserAvatar(req.body.email);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password
      });
      // Mongoose middleware(pre-save) will hash the password
      newUser
        .save()
        .then(user => {
          jwt.sign({ id: user.id }, jwtSecret, (err, token) => {
            if (err) throw err;
            res.json({ user: user, token: token });
          });
        })
        .catch(err => console.log(err));
    }
  });
});

// @route POST api/user/signin
// To signin a user
router.post("/signin", (req, res) => {
  const { err, isValid } = signinValidation(req.body);

  if (!isValid) return res.status(400).json(err);
  const { username, password } = req.body;

  User.findOne({ username: username }).then(user => {
    if (!user) {
      err.username = "User not found";
      return res.status(400).json(err);
    }

    user.comparePassword(password, isMatch => {
      if (!isMatch) {
        err.password = "Password is incorrect";
        return res.status(400).json(err);
      }

      jwt.sign({ id: user.id }, jwtSecret, (err, token) => {
        if (err) throw err;
        res.json({
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar
          },
          token: token
        });
      });
    });
  });
});

module.exports = router;
