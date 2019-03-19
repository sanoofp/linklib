const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey mom 😍");
});

module.exports = router;
