// app.js
const express = require("express");

const parser = require("body-parser"); // body정보 해석처리.
const sql = require("./sql"); // sql/index.js

const app = express(); // express 인스턴스.
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json()); // application/json

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.excute("select * from customers");
    console.log(customerList);
    resp.json(customerList);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 등록.
app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.excute(
      "insert into customers set ?", //
      [req.body.param]
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 삭제
app.delete("/customer/:id", async (req, resp) => {
  console.log(req.params.id);
  try {
    let result = await sql.excute(
      "delete from customers where id = ?", //
      parseInt(req.params.id)
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});
// 수정
app.put("/customer/:id", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.excute(
      "update customers set ? where id = ?", //
      [req.body.param, parseInt(req.params.id)]
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
