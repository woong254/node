// sql/index.js
const mysql = require("mysql2");

// connect pool 생성.
const pool = mysql.createPool({
  host: "127.0.0.1", // localhost
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10, // 최대접속수
});

function excute(sql, param = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, param, (queryErr, result) => {
        connection.release(); // connection => pool 반납.
        if (queryErr) {
          return reject(queryErr);
        }
        resolve(result);
      }); // end of query
    }); // end of getConnection
  });
} // end of excute

module.exports = {
  excute,
};
