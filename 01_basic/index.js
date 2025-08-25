let name = "정지웅";
let score = 50;

console.log("이름은 " + name + " 점수는 " + score);
console.log(
  `이름은 ${name} 점수는 ${score} 합격여부 ${score > 60 ? "합격" : "불합격"}`
);

[(1, 2, 3)].forEach((Element) => {
  console.log(Element);
});

function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

const NunberFormat = "2025.08.08";
// NunberFormat = "2025.06.08"; 상수 변수는 재할당이 불가

for (let i = 1; i <= 5; i++) {
  if (i % 2) {
    //falsy : 0, null, "", undefined
    let name = "king"; // {}안에서만 값을 유지
    console.log(name);
  } else {
    console.log(name);
  }
}
