const router = require("express").Router();
const Link = require("../../models/Link");
const urlpost = require("../../validation/urlpost");
const { auth } = require("../../helper/auth");

// @route GET /api/link
// @desc Get all links from a specific user
router.get("/:userid", (req, res) => {
  Link.find({ userID: req.params.userid })
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(400).json({ msg: "Invalid User ID", err: err }));
});

// @route POST /api/link
router.post("/", auth, (req, res) => {
  const { err, isValid } = urlpost(req.body);
  console.log(err);
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

// @route GET /api/link/single/:linkid
router.get("/single/:linkid", (req, res) => {
  console.log(req.params.linkid);
  if (!req.params.linkid)
    return res.status(400).json({ msg: "Link ID Required." });
  Link.findOne({ _id: req.params.linkid })
    .then(link => res.json(link))
    .catch(err =>
      res.status(400).json({ err: err, msg: "Invalid Message ID" })
    );
});

module.exports = router;
