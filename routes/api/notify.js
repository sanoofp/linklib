const router = require("express").Router();
const { auth } = require("../../helper/auth");
const Session = require("../../models/LoggedInSession");
const io = require("socket.io");

// TEST
router.get("/all", (req, res) => {
  Session.find({}).then(session => res.json(session));
});

// @route GET /api/notify
router.get("/", auth, (req, res) => {
  Session.findOne({ userID: req.user.id })
    .then(session => {
      io.emit("notify", session.devices);
      res.send(session);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
