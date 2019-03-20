const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api");

const app = express();

app.use(express.json());
app.set("port", process.env.PORT || 5000);

app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(app.get("port"), () => console.log("Server Started."));
