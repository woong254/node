fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((Response) => Response.json())
  .then((result) => {
    result
      .filter((ele) => {
        if (ele.reply.indexOf("연습") > -1) {
          return true;
        }
      })
      .forEach((ele, idx) => {
        console.log("댓글번호: " + ele.replyNo + " 인덱스: " + idx);
      });
  })
  .catch(console.log);
