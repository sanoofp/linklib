const router = require("express").Router();
const Link = require("../../models/Link");
const urlpost = require("../../validation/urlpost");
const { auth } = require("../../helper/auth");

// @route GET /api/link/:userid
// @desc Get all links from a specific user
router.get("/:userid", auth, (req, res) => {
  Link.find({ userID: req.params.userid })
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(400).json({ msg: "Invalid User ID", err: err }));
});

// @route POST /api/link
// @desc Create a link
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

// @route GET /api/link/single/:linkid
// @desc Get a single link from ID
router.get("/single/:linkid", (req, res) => {
  if (!req.params.linkid)
    return res.status(400).json({ msg: "Link ID Required." });
  Link.findOne({ _id: req.params.linkid })
    .populate("userID", "avatar id")
    .then(link => {
      if (link) return res.status(200).json(link);
      return res.status(400).json({ msg: "Invalid Link ID" });
    })
    .catch(err => res.status(400).json({ msg: "Invalid Link", err: err }));
});

// @route POST /api/link/up/:linkid
// @desc up vote a link
router.post("/up/:linkid", auth, (req, res) => {
  Link.findById(req.params.linkid)
    .then(link => {
      let alreadyVotedUser = false;
      link.vote.users.find(user => {
        if (String(user.userID) === String(req.user.id)) {
          alreadyVotedUser = true;
          return true;
        }
      });
      console.log("VOTED: ", alreadyVotedUser);
      if (!alreadyVotedUser) {
        link.vote.up = ++link.vote.up;
        link.vote.users.push({ userID: req.user.id });
      } else {
        link.vote.up = --link.vote.up;
        link.vote.users = link.vote.users.filter(
          user => user.userID === req.user.id
        );
      }
      link.save().then(updated => {
        console.log(updated.vote.users);
        res.status(200).json(updated);
      });
    })
    .catch(err => res.status(400).json(err));
});

// @route DELETE /api/link/:linkid
// @desc Delete a link with ID
router.delete("/:linkid", auth, (req, res) => {
  Link.deleteOne({ _id: req.params.linkid })
    .then(data => res.send(data))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
