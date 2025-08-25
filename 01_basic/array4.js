// [].reduce()
let result = [10, 15, 20, 25, 30].reduce((acc, ele) => {
  if (ele % 2 == 0) {
    acc.push(ele);
  }
  return acc;
}, []);
console.log(result); // [10, 20, 30]
