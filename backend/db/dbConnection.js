const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = connection;
