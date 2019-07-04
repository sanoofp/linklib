const router = require("express").Router();
const User = require("../../models/User");
const Link = require("../../models/Link");
const webpush = require("web-push")
const sentLinkPost = require("../../validation/sentLinkPost")
const urlpost = require("../../validation/urlpost");
const { auth } = require("../../helper/auth");

// @route GET /api/sent/link/:touserid
router.post("/link/:toUserID", auth, (req, res) => {
  const { err, isValid } = sentLinkPost(req.body);
  if(!isValid) return res.status(400).json(err);
  
  const { linkID, fromUsername } = req.body
  
  User.findById(req.params.toUserID)
    .then(user => {
      user.incoming_links.unshift({
        linkID: linkID,
        fromUsername: fromUsername
      });
      
      user.save().then(() => {
        user.subscriptions.map(sub => {
          const payload = JSON.stringify({
            title: "New Link recevied",
            icon: user.avatar,
            body: `A new link request has recevied from ${fromUsername}`,
            openll: true
          });
          webpush.sendNotification(sub, payload).catch(err => console.error(err))
        });
        res.status(200).json({ success: true })
      });
    })
});

// @route POST /api/sent/transferlink/:jobid
router.post("/transferlink/:jobID", auth, (req, res) => {
  const { err, isValid } = urlpost(req.body);
  if (!isValid) return res.status(400).json(err);

  const transferedLink = {
    linkTitle: req.body.linkTitle,
    url: req.body.url,
    tags: req.body.tags,
    userID: req.body.userID
  }

  new Link(transferedLink)
    .save()
    .then(link => {
      User.findById(req.user.id)
        .then(user => {
          user.incoming_links = user.incoming_links.filter(incomingLink => {
            return incomingLink._id == req.params.jobID ? false : true
          });
          user.save().then(() =>{
            res.status(200).json(link)
          });
        }); 
    });
});

// @route DELETE /api/sent/rejectlink
router.delete("/rejectlink/:jobID", auth, (req, res) => {
  const jobID = req.params.jobID;

  User.findById(req.user.id)
    .then(user => {
      user.incoming_links = user.incoming_links.filter(incomingLink => {
        return incomingLink._id == jobID ? false : true;
      });
      user.save().then(() => res.status(200).json({ success: true }))
    })
})

module.exports = router;