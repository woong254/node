//nodecron
const cron = require("node-cron");
//초 분 시
cron.schedule("5 * * * * *", () => {
  let current = new Date();
  console.log(current.toISOString() + "=> cron 실행됨.");
});
