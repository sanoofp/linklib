const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoggedInSessionSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  devices: [
    {
      deviceName: {
        type: String,
        required: true
      }
    }
  ]
});

const Session = mongoose.model("LoggedInSession", LoggedInSessionSchema);

module.exports = Session;
