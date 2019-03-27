const router = require("express").Router();
const Link = require("../../models/Link");
const urlpost = require("../../validation/urlpost");
const { auth } = require("../../helper/auth");

// @route GET api/link
router.get("/:userid", (req, res) => {
  Link.find({ userID: req.params.userid })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route POST api/link
router.post("/", auth, (req, res) => {
  const { err, isValid } = urlpost(req.body);
  if (!isValid) return res.status(400).json(err);

  const newLink = {
    linkTitle: req.body.linkTitle,
    url: req.body.url,
    userID: req.user.id
  };

  new Link(newLink)
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
