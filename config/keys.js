const config = require("config");

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = {
    mongoURI: config.get("mongoURI"),
    jwtSecret: config.get("jwtSecret")
  };
}
