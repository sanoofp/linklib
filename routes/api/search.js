const router = require("express").Router();
const Link = require("../../models/Link");

// @route GET /api/search?q=keyword
// @desc Search for link's
router.get("/", (req, res) => {
  const q = req.query.q;
  const max = Number(req.query.max);
  const regex = new RegExp(q, "gi");
  if (q !== "") {
    return Link.find({ linkTitle: regex, public_link: true })
      .populate("userID", "avatar id username")      
      .limit(max)
      .then(searchResult => res.status(200).json(searchResult));
  }
  return res.status(200).json([]);
});

module.exports = router;
