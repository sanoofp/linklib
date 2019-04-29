const router = require("express").Router();
const request = require("request");
const Link = require("../../models/Link");
const getDetails = require("../../helper/screenshot");
const isURL = require("validator/lib/isURL");

// @route GET /api/search?q=keyword
// @desc Search for link's
router.get("/", (req, res) => {
  const q = req.query.q;
  const max = Number(req.query.max);
  const regex = new RegExp(q, "gi");
  Link.find({ linkTitle: regex, public_link: true })
    .populate("userID", "avatar id username")      
    .limit(max)
    .then(searchResult => res.status(200).json(searchResult));
});

// @route GET /api/search/title
// @desc Search for title and screenshot of page from URL
router.post("/title", (req, res) => {
  const url = req.body.url;
  if(!isURL(url, { require_protocol: true })) {
    return res.status(400).json({ message: "Invalid URL" })
  }
  request(url, (err, response, html) => {
    getDetails(url, data => {
      console.log(data);
      res.status(200).json(data);    
    });
  });
})

module.exports = router;
