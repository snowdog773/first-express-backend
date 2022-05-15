const users = require("../users.json");
function addDataToRequest(req, res, next) {
  req.users = users;
  next();
}

module.exports = { addDataToRequest };
