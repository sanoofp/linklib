const mongoose = require("mongoose");
const Scheme = require("mongoose").Schema;
const bcrypt = require("bcryptjs");

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
  avatar: {
    type: String,
    required: true
  },
  registered_date: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre("save", function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(userPassword, cb) {
  bcrypt.compare(userPassword, this.password).then(isMatch => cb(isMatch));
};

const User = mongoose.model("User", userSchema);
module.exports = User;
