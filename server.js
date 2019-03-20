const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());

app.use("/api", require("./routes/api"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Server Started."));
