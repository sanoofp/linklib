const router = require("express").Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const signupValidation = require("../../validation/signup");
const signinValidation = require("../../validation/signin");
const { generateUserAvatar } = require("../../config/auth");

const User = require("../../models/User");

// @route POST api/user
router.get("/", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

// @route POST api/user
router.post("/", (req, res) => {
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
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ user: user, token: token });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/user/signin
router.post("/signin", (req, res) => {
  const { err, isValid } = signinValidation(req.body);

  if (!isValid) return res.status(400).json(err);
  const { username, password } = req.body;

  User.findOne({ username: username }).then(user => {
    if (!user) {
      err.username = "Username not found";
      return res.status(400).json(err);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        err.password = "Password incorrect";
        return res.status(400).json(err);
      }
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ user: user, token: token });
        }
      );
    });
  });
});

module.exports = router;
