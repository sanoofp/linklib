const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { auth } = require("./helper/auth");
const User = require("./models/User");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const { mongoURI } = require("./config/keys");

app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(express.json());
app.use(compression());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

let S;
io.on("connection", socket => {
  console.log("New client connected");
  S = socket;
  socket.on("disconnect", () => console.log("Client disconnected"));
});

app.get("/notify", auth, (req, res) => {
  const userID = req.user.id;
  User.findById(userID)
    .then(user => {
      console.log(`EMITTING >>> notify-${userID}`);
      S.emit(`notify-${userID}`, user);
      res.status(200).send(user);
    })
    .catch(err => res.status(400).json(err));
});

app.use("/api/user", require("./routes/api/user"));
app.use("/api/link", require("./routes/api/link"));
app.use("/api/notify", require("./routes/api/notify"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

http.listen(process.env.PORT || 5000, () => console.log("Server Started"));
// app.listen(app.get("port"), () => console.log("Server Started."));
