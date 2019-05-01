const router = require("express").Router();
const webpush = require("web-push");
const { auth } = require("../../helper/auth");
const User = require("../../models/User");
const Link = require("../../models/Link");

router.post("/sub/:userid", (req, res) => {
  const sub = req.body;
  console.log(sub);
  User.findById(req.params.userid).then(user => {
    user.subscriptions.push(sub);
    user.save().then(() => {
      const payload = JSON.stringify({
        title: `${user.username}, has been subscribed to linklib.`,
        icon: user.avatar,
        email: user.email
      });
      webpush.sendNotification(sub, payload).catch(err => console.log(err));
      res.status(201).json({});
    });
  });
});

router.get("/trigger/:linkid", auth, (req, res) => {
  const userID = req.user.id;
  const linkID = req.params.linkid;
  console.log(userID, linkID);
  User.findById(userID)
  .then(user => {
    Link.findById(linkID)
      .then(link => {
        const subscriptions = user.subscriptions;
        for(let i = 0; i < subscriptions.length; i++){
          console.log(subscriptions[i]);
          const payload = JSON.stringify({
            title: `${link.linkTitle}`,
            icon: user.avatar,
            body: link.url,
            link: link
          });
          webpush.sendNotification(subscriptions[i], payload).catch(err => console.log(err));    
        }
        res.status(200).send(user);
      })
      .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
})

module.exports = router;
