// setInterval.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wordAry = "apple banana grapes orange" // Rem numquam necessitatibus dignissimos fugiat voluptates quas repellendus assumenda ullam nihil dolorem quos optio, culpa aliquid placeat perspiciatis eos sed voluptate. Iusto?" //
  .split(" ");

// count: 100 -> 0이 될때까지 1씩 감소

let cnt = 30;
let cntTime = setInterval(() => {
  cnt--;
  if (cnt < 1) {
    console.log("시간 종료");
    process.exit();
  }
}, 1000);
wordAry.forEach((word) => {
  console.log(word);
});
function myFunction() {
  if (wordAry.length == 0) {
    console.log("성공");
    process.exit();
  }
  rl.question("단어를 입력하세요.", (answer) => {
    let search = answer;
    let idx = wordAry.indexOf(search);
    wordAry.splice(idx, 1); // 삭제.
    wordAry.forEach((word) => {
      console.log(word);
    });
    myFunction();
  });
}
myFunction();
