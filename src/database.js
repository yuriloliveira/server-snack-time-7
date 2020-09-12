const mysql = require("mysql");

const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASSWORD = "techneesafra";
const DB_DATABASE = "snack_database";
const DB_PORT = 3306;

async function execSQL(query, params) {
  const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
  });

  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });

    connection.end();
  });
}

module.exports = {
  execSQL,
};
