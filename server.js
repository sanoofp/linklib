const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const webpush = require("web-push");
const cors = require("cors");
const sslRedirect = require('heroku-ssl-redirect');

const { mongoURI, vapidPublic, vapidPrivate } = require("./config/keys");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(sslRedirect());
app.use(morgan("dev"));
app.use(express.json());
app.use(compression());
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

webpush.setVapidDetails(
  "mailto:sanoofpb24@gmail.com",
  vapidPublic,
  vapidPrivate
)

// Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/link", require("./routes/api/link"));
app.use("/api/notify", require("./routes/api/notify"));
app.use("/api/search", require("./routes/api/search"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => console.log("Server Started"));
