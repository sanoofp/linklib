const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

module.exports = {
  generateUserAvatar: function(email) {
    const md5 = crypto
      .createHash("md5")
      .update(email)
      .digest("hex");
    return `https://www.gravatar.com/avatar/${md5}?s=100&d=identicon`;
  },
  auth: function(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization Denied" });
    }
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Invalid Token" });
    }
  }
};
