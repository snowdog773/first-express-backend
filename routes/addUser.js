const express = require("express");
const app = express.Router();
const asyncMySQL = require("./connection");

app.post("/", (req, res) => {
  try {
    asyncMySQL(
      `INSERT INTO userdata (Username, Email, Password, Firstname, Lastname, Age, Occupation) VALUES ('${req.body.username}', '${req.body.email}', '${req.body.password}', '${req.body.firstName}', '${req.body.lastName}', ${req.body.age}, '${req.body.occupation}');`
    );
    res.send("data stored");
  } catch {
    res.send(error);
  }
});
// app.post("/", (req, res) => {
//   req.users.push(req.body);
//   res.send(req.users);
// });

module.exports = app;
