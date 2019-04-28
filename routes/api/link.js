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

// @route PUT /api/link/:linkid
// @desc Update a link
router.put("/:linkid", auth, (req, res) => {
  const { err, isValid } = urlpost(req.body);
  if(!isValid) return res.status(400).json(err);

  const { linkTitle, url, tags, public_link } = req.body;
  
  Link.findById(req.params.linkid)
    .then(link => {
      link.linkTitle = linkTitle;
      link.url = url;
      link.public_link = public_link;
      link.tags = tags ? link.tags.push(tags) : link.tags;

      link.save().then(link => {
        res.status(200).json(link)
      })
      .catch(err => console.log(err));
    });
});

// @route GET /api/link/single/:linkid
// @desc Get a single link from ID
router.get("/single/:linkid", (req, res) => {
  if (!req.params.linkid)
    return res.status(400).json({ msg: "Link ID Required." });
  Link.findOne({ _id: req.params.linkid })
    .populate("userID", "avatar id username")
    .then(link => {
      if (link) return res.status(200).json(link);
      return res.status(400).json({ msg: "Invalid Link ID" });
    })
    .catch(err => res.status(400).json({ msg: "Invalid Link", err: err }));
});


// @route DELETE /api/link/:linkid
// @desc Delete a link with ID
router.delete("/:linkid", auth, (req, res) => {
  Link.deleteOne({ _id: req.params.linkid })
    .then(data => res.send(data))
    .catch(err => res.status(400).json(err));
});


module.exports = router;
