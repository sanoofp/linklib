const mongoose = require("mongoose");
const Scheme = require("mongoose").Schema;

const userSchema = new Scheme({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
