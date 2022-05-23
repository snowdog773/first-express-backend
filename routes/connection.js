const mysql = require("mysql");

const connection = mysql.createConnection({
  database: "first_backend_project",
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
});
connection.connect();

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }

      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
