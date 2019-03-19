const express = require("express");

const app = express();

app.use(express.json());

app.use('/api', require('./routes/api'));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log("Server Started."));