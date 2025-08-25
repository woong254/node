// consol에 "hello, world" 구문을 출력하는 함수 myFunc 선언

function hw() {
  console.log("hello, wordl");
}

const defaultNum = 12;

const sum = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

//export { hw, defaultNum, sum };

module.exports = {
  hw,
  defaultNum,
  sum,
};
