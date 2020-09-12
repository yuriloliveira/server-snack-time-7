const express = require("express");
const mysql = require("mysql");

const signinRouter = require("./signin");

const app = express();

app.use("/signin/", signinRouter);
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "techneesafra",
  database: "snack_database",
  port: 3306,
});

connection.connect();

app.get("/products", function (req, res) {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) {
      throw error;
    }

    res.send(results.map((item) => ({ name: item.name, price: item.price })));
  });
});
app.listen(3001);

console.log("App listening on port 3001");
