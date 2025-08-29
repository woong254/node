// app.js
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql");
const cors = require("cors");
// console.log(prodSql["productMainImage"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 상품쿼리.
app.post("/api/:alias", async (req, resp) => {
  let search = prodSql[req.params.alias].query; // alias: productDetail
  let param = req.body.param; // param: [2]
  try {
    let result = await sql.excute(search, param);
    resp.json(result);
  } catch (err) {
    console.error("SQL 실행 오류:", err);
    resp.json({ retCode: "Error" });
  }
});

// 고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    resp.json(customerList);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});
app.get("/products", async (req, resp) => {
  try {
    resp.json([
      {
        product_name: "기계식 키보드",
        price: 25000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "무선 마우스",
        price: 12000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "아이패드",
        price: 725000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "무선충전기",
        price: 42000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
    ]);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});
// 등록.
app.post("/customer", async (req, resp) => {
  try {
    let result = await sql.execute(
      "insert into customers set ?", //
      [req.body.param]
    );
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// http://localhost:8080/boardList.do?page=3
// http://localhost:3000/customer/:id
app.delete("/customer/:id", async (req, resp) => {
  try {
    let result = await sql.execute(
      "delete from customers where id = ?", //
      [req.params.id]
    );
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

//수정.
app.put("/customer", async (req, resp) => {
  console.log(req.body);
  try {
    let result = await sql.execute(
      "update customers set name=?,email=?,phone=? where id = ?", //
      [req.body.name, req.body.email, req.body.phone, req.body.id]
    );
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
