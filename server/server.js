const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
app.use(express.json()); // doc data kieu json
app.use(express.urlencoded({ extended: true })); // doc data dang Array or Object

app.use("/", (req, res) => {
  res.send("SERVER ONNNN");
});

app.listen(port, () => {
  console.log("Server running on the port: " + port);
});
