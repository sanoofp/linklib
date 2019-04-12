const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const LinkSchema = new Schema({
  linkTitle: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  vote: {
    up: {
      type: Number,
      default: 0
    },
    users: [
      {
        userID: {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;
