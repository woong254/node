// 학생 : 학번, 이름, 키, 몸무게...
//      : 먹는다, 잔다, 공부한다...
// 객체(인스턴스) =>
let std1 = {
  stdNo: 1234,
  stdName: "홍길동",
  height: 170,
  eat: function (food) {
    console.log(food + "을 먹는다");
  },
  sleep(hours) {
    console.log(hours + "시간을 잔다");
  },
};

// 객체 -> 설계도
class student {
  // 생성자
  constructor(stdNo, stdName, height) {
    this.stdNo = stdNo;
    this.stdName = stdName;
    this.height = height;
  }
  //메소드
  eat(food) {
    console.log(food + "을 먹는다.");
  }
  sleep(hours) {
    console.log(hours + "시간을 잔다");
  }
}

let std2 = new student(1235, "김민수", 190);
let std3 = new student(1236, "정지웅", 230);

console.log(std1.stdNo, std1.stdName);
console.log(std2.stdNo, std2.stdName);
console.log(std3.stdNo, std3.stdName, std3.height);
