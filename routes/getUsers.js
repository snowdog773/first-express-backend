const express = require("express");
const app = express.Router();
const asyncMySQL = require("./connection");

app.get("/", async (req, res) => {
  const results = await asyncMySQL("SELECT * FROM userdata");

  res.send(results);
  // const usersMod = [...req.users];
  // if (req.query.count && req.query.count < usersMod.length) {
  //   usersMod.length = req.query.count;
  // }
  // res.send(usersMod);
});

module.exports = app;
