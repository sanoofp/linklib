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
  User.findById(userID)
  .then(user => {
    Link.findById(linkID)
      .then(link => {
        const subscriptions = user.subscriptions;
        for(let i = 0; i < subscriptions.length; i++){
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

router.post("/unsub/:userid", (req, res) => {
  const oldsub = req.body;
  User.findById(req.params.userid).then(user => {
    console.log(user.subscriptions.length);    
    user.subscriptions = user.subscriptions.filter(sub => {
      if(sub.endpoint != oldsub.endpoint) {
        // console.log("UNSUBING::::", sub);
        return true;
      }
    });
    user.save().then((user) => {
      console.log(user.subscriptions.length);
      res.status(200).json({})
    })
  });
});

module.exports = router;
