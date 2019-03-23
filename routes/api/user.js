const router = require("express").Router();

// @route POST api/user
router.post("/", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).send({ msg: "Please enter all fields." });
  }
});

module.exports = router;
