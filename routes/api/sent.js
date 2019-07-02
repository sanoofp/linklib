const router = require("express").Router();
const User = require("../../models/User");
const Link = require("../../models/Link");
const sentLinkPost = require("../../validation/sentLinkPost")
const { auth } = require("../../helper/auth");

// @route GET /api/sent/link/:touserid
router.post("/link/:toUserID", auth, (req, res) => {
  const { err, isValid } = sentLinkPost(req.body);
  if(!isValid) return res.status(400).json(err);
  
  const { linkID, fromUsername } = req.body
  
  User.findById(req.params.toUserID)
    .then(user => {
      user.incoming_links.push({
        linkID: linkID,
        fromUsername: fromUsername
      });
      user.save().then(() => res.status(200).json({ success: true }));
    })
});

module.exports = router;