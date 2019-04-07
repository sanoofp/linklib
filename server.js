const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const webpush = require("web-push");

const { mongoURI, vapidPublic, vapidPrivate } = require("./config/keys");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(express.json());
app.use(compression());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

webpush.setVapidDetails(
  "mailto:sanoofpb24@gmail.com",
  vapidPublic,
  vapidPrivate
);

app.post("/notify", (req, res) => {
  const subscriptions = req.body;
  console.log(subscriptions);
  res.status(201).json({});
  const payload = JSON.stringify({
    title: "PUSH NOTIFICATION",
    body: "Welcome to Linklib\n You can manage, share and save link with ease."
  });
  webpush
    .sendNotification(subscriptions, payload)
    .catch(err => console.log(err));
});

app.use("/api/user", require("./routes/api/user"));
app.use("/api/link", require("./routes/api/link"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), () => console.log("Server Started."));
