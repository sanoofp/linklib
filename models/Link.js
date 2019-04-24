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
  public_link: {
    type: Boolean,
    default: true
  },
  tags: [],
  date: {
    type: Date,
    default: Date.now
  }
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;
