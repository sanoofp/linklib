const express = require("express");
const compression = require("compression");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const sslRedirect = require('heroku-ssl-redirect');

const { mongoURI } = require("./config/keys");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.set("port", process.env.PORT || 5000);
app.set("socketio", io);

app.use(sslRedirect());
app.use(morgan("dev"));
app.use(express.json());
app.use(compression());
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log("Database connection failed ", err));

io.on("connection", socket => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    socket.disconnect(true);
    console.log("Client disconnected.");
  });
});

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

http.listen(process.env.PORT || 5000, () => console.log("Server Started"));
