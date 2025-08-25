// fs_write.js
const fs = require("fs");
// fs.readFile / fs. readFileSync 활용해서 stdout.log 정보를 읽어들이고 file_log.txt 에 생성
fs.readFile("./stdout.log", "utf8", (err, buf) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(
    "./file_log.txt",
    buf,
    { encoding: "utf8", flag: "a" },
    (err) => {
      if (err) {
        console.error("예외발생");
        return;
      }
      console.log("파일생성완료!");
    }
  );
});
