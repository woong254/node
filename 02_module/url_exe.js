//url_exe.js
const urlInfo =
  "https://username:pass@test.example.com:8080/pord/computer.pageInfo?page=3&pcode=ABC#hash";
const myUrl = new URL(urlInfo);

console.log(myUrl.href); //https://username:pass@test.example.com:8080/pord/computer.pageInfo?page=3&pcode=ABC#hash
console.log(myUrl.origin); //https://test.example.com:8080
console.log(myUrl.searchParams.values());
