// app.js
const express = require("express");
const excel = require("./excel");

require("dotenv").config({
  path: "./.env",
});
const nodemail = require("./nodemail");

const app = express();
app.use(express.urlencoded()); // x-www-form-urlencoded

// 라우팅.
app.get("/", (req, resp) => {
  resp.send("/실행");
});
app.get("/mail", (req, resp) => {
  resp.send(`<form action="mail" method="post">
      <table>
        <tr>
          <th>보내는이:</th>
          <td><input type="email" name="sender" value="wjdwldnd875@daum.net"/></td>
        </tr>
        <tr>
          <th>받는이:</th>
          <td><input type="email" name="receiver" /></td>
        </tr>
        <tr>
          <th>제목:</th>
          <td><input type="text" name="subject" /></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><textarea name="content"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="submit" value="메일보내기" />
          </td>
        </tr>
      </table>
    </form>`);
});
app.post("/mail", (req, resp) => {
  console.log(req.body);
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    text: req.body.content,
  }; // from, to, subject, text(html)
  nodemail.mailSend(data);
  resp.send("done");
});

// "/excel_down" => customers 테이블의 데이터를 logs/customer2.xlsx로 저장
app.get("/excel_down", (req, resp) => {
  excel.db_to_excel();
  resp.send("저장성공");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
