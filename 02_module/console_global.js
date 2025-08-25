// const arr = [
//   { name: "John Doe", email: "jhon@gamil.com" },
//   { name: "Jung jiwoong", email: "wjdwldnd254@gamil.com" },
// ];

// console.table(arr);

const obj = {
  students: {
    grade1: {
      classA: {
        student1: { name: "Alice", age: 7 },
        student2: { name: "Bob", age: 6 },
      },
      classB: {
        student1: { name: "Charlie", age: 7 },
        student2: { name: "tom", age: 9 },
      },
    },
    grade2: {
      classA: {
        student1: { name: "Lisa", age: 5 },
        student2: { name: "Kim", age: 6 },
      },
      classB: {
        student1: { name: "Jung", age: 27 },
        student2: { name: "bibi", age: 25 },
      },
    },
    teachers: "Jung jiwoong",
  },
};
for (let i = 1; i < 5; i++) {
  console.dir(obj, { depth: i });
}
