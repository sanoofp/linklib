const config = require("config");

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = {
    mongoURI: config.get("mongoURI"),
    jwtSecret: config.get("jwtSecret"),
    vapidPublic: config.get("publicKey"),
    vapidPrivate: config.get("privateKey"),
    sendGridUser: config.get("sgUser"),
    sendGridPass: config.get("sgPass"),
  };
}
