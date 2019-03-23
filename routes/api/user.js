const router = require("express").Router();
const bcrypt = require("bcryptjs");
const signupValidation = require("../../validation/signup");
const { generateUserAvatar } = require("../../config/auth");

const User = require("../../models/User");

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
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
