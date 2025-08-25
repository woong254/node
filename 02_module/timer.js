//timer.js

setTimeout(() => {
  console.log("3초");
}, 3000);

const interval = setInterval(() => {
  console.log("1초마다 실행합니다");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000); //5초후 인터벌 종료

setImmediate(() => {
  console.log("코드 실행 후 마지막에 실행."); // 이벤트루프 stack에 작업을 완료. // queue 에 작업을 실행하기 전 실행.
});

let sum = 0;
for (let i = 0; i < 900999; i++) {
  sum += i;
}

console.log("sum=>" + sum);
