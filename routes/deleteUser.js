const express = require("express");
const app = express.Router();

app.delete("/", (req, res) => {
  const update = req.users.findIndex((e) => e.firstName === req.query.name);
  req.users.splice(update, 1);

  res.send(req.users);
});
//query takes a parameter called name which matches the value firstName of the data object

module.exports = app;
