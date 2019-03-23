const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(compression());
app.use(express.json());

mongoose
  .connect(config.get("mongoURI"), { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

app.use("/api/user", require("./routes/api/user"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), () => console.log("Server Started."));
