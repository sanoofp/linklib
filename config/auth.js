const crypto = require("crypto");

module.exports = {
  generateUserAvatar: function(email) {
    const md5 = crypto
      .createHash("md5")
      .update(email)
      .digest("hex");
    console.log(email, md5);
    return `https://www.gravatar.com/avatar/${md5}?s=100&d=identicon`;
  }
};
