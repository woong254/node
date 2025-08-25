let reg = /World/g;
//reg = new RegExp("World");

let str = `Hello Hi..
World!
world`;

console.log(str.replace(/world/gi, "세상!"));

console.log(reg.exec(str));
