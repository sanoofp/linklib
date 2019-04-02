const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const enforce = require("express-sslify");
const { mongoURI } = require("./config/keys");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/link", require("./routes/api/link"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), () => console.log("Server Started."));
