// app.js
const express = require("express");
const mysql = require("mysql2");
const parser = require("body-parser"); // body정보 해석처리.

// connect pool 생성.
const pool = mysql.createPool({
  host: "127.0.0.1", // localhost
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10, // 최대접속수
});

const app = express(); // express 인스턴스.
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json()); // application/json

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 고객목록.
app.get("/customers", (req, resp) => {
  //connection = pool.getConnection();
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득.
    if (err) {
      console.log(err);
      return;
    }
    connection.query("select * from customers", (err, result) => {
      if (err) {
        console.log(err);
        resp.send("쿼리실행 중 에러");
        return;
      }
      console.log(result);
      //resp.send("실행완료");
      resp.json(result); // json 결과 반환.
      connection.release(); // connection => pool 반납.
    }); // end of query
  }); // end of getConnection
});

// 등록.
app.post("/customer", (req, resp) => {
  console.log(req.body.param);
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득.
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      "insert into customers set ?",
      [req.body.param], // [{name: '방재우', email:'bang@email.com', phone:'010-1111-2123'}]
      (err, result) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행 중 에러");
          return;
        }
        console.log(result);
        //resp.send("실행완료");
        resp.json(result); // json 결과 반환.
        connection.release(); // connection => pool 반납.
      }
    ); // end of query
  }); // end of getConnection
});

// http://localhost:3000/customer/:id
app.delete("/customer/:id", (req, resp) => {
  console.log(req.params.id);
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득.
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      "DELETE FROM customers WHERE id = ?",
      parseInt(req.params.id),
      (err, result) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행 중 에러");
          return;
        }
        console.log(result);
        //resp.send("실행완료");
        resp.json(result); // json 결과 반환.
        connection.release(); // connection => pool 반납.
      }
    ); // end of query
  }); // end of getConnection
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
