const express = require("express");
const app = express.Router();

app.post("/", (req, res) => {
  const update = req.users.findIndex((e) => e.firstName === req.query.name);
  req.users.splice(update, 1, req.body);
  res.send(req.users);
});
//query takes a parameter called name which matches the value firstName of the data object
module.exports = app;
