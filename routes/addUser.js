const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
  req.users.push(req.body);
  res.send(req.users);
});

module.exports = app;
