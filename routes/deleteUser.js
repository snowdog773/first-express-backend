const express = require("express");
const app = express.Router();
const asyncMySQL = require("./connection");

app.delete("/", (req, res, next) => {
  asyncMySQL(`DELETE FROM userdata WHERE Username = "${req.query.username}"`);
  res.send("deleted");
});
//query takes a parameter called name which matches the value username of the data object

module.exports = app;
