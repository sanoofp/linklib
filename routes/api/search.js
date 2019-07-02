const router = require("express").Router();
const Link = require("../../models/Link");
const User = require("../../models/User");

// @route GET /api/search?q=keyword
// @desc Search for link's
router.get("/", (req, res) => {
  const q = req.query.q;
  const max = Number(req.query.max);
  const regex = new RegExp(q, "gi");
  Link.find({ linkTitle: regex, public_link: true })
    .populate("userID", "avatar id username")
    .limit(max)
    .then(searchResult => res.status(200).json(searchResult));
});

// @route GET /api/search/user?username=name
router.get("/user", (req, res) => {
  const username = req.query.username;
  const regex = new RegExp(username, "gi");
  User.find({ username: regex })
    .limit(10)
    .select("username avatar")
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
})


module.exports = router;
