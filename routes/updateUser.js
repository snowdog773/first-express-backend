const express = require("express");
const app = express.Router();
const asyncMySQL = require("./connection");

app.post("/", (req, res) => {
  const results = asyncMySQL(
    `UPDATE userdata SET Username = '${req.body.username}',Email = '${req.body.email}', Password = '${req.body.password}', Firstname = '${req.body.firstName}', Lastname = '${req.body.lastName}', Age = ${req.body.age}, Occupation = '${req.body.occupation}' WHERE Username = '${req.body.username}'`
  );
  res.send("entry updated");
  // const update = req.users.findIndex((e) => e.firstName === req.query.name);
  // req.users.splice(update, 1, req.body);
  // res.send(req.users);
});
//query takes a parameter called name which matches the value firstName of the data object
module.exports = app;
