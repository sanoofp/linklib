const router = require("express").Router();
const { auth } = require("../../helper/auth");
const User = require("../../models/User");
const Link = require("../../models/Link");

// @route GET /api/notify/:userid
router.get("/:linkid", auth, (req, res) => {
  const userID = req.user.id;
  const linkID = req.params.linkid;
  const io = req.app.get("socketio");

  User.findById(userID)
    .then(user => {
      console.log(`EMITTING >>> notify-${userID}`);
      Link.findById(linkID)
        .then(link => {
          console.log(link);
          io.sockets.emit(`notify-${userID}`, {
            link: link,
            icon: user.avatar
          });
          res.status(200).send(user);
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
