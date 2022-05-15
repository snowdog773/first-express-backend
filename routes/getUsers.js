const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  const usersMod = [...req.users];

  if (req.query.count && req.query.count < usersMod.length) {
    usersMod.length = req.query.count;
  }

  res.send(usersMod);
});

module.exports = app;
