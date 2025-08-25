// [].sort()

let fruits = ["apple", "cherry", "banana"];

fruits.sort(); //abc정렬

fruits.forEach((fruit) => {
  console.log(fruit);
});

let numbers = [55, 1, 24, 73, 23, 45];

numbers.sort(function (a, b) {
  if (a < b) {
    return 1; // 위치를 변경: 양수
  } else {
    return -1; // 위치를 유지: 음수
  }
});

numbers.forEach((num) => {
  console.log(num);
});

//filter()
[
  { name: "Hong", point: 10 },
  { name: "Kim", point: 23 },
  { name: "Park", point: 46 },
  { name: "Choi", point: 17 },
  { name: "Hwang", point: 56 },
]
  .filter((ele, inx, ary) => {
    if (ele.point > 30) {
      return true;
    }
  })
  .forEach((ele) => {
    console.log(ele.name);
  });
