// crypto_exe.js
const crypto = require("crypto");
const { resolve } = require("path");
let pass = crypto.createHash("sha512").update("test1234").digest("base64");

console.log(pass);

//salt값을 생성하는 함수.
//random 값이 만들어짐.
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        //실패.
        reject(err);
      }
      //성공.
      resolve(buf.toString("base64"));
    });
  });
};
//createSalt();
//salt 값을 활용해서 평문 -> 암호화문 변경.
const createCryptoPassword = async (trpw) => {
  let salt = await createSalt();
  console.log(salt);
  salt =
    "Ry3XgtbGwn2ixknQL5iWxFPaTSrf0N4oKyeK/FkcWFLmdFNDT1mflMQL1hlTu4gh45Bi7al4wA4mrZ1x4+X65Q==";

  pw =
    "8PDsWROU9GXvkcPcfHUU9Ua/KU3RQBOMeV++nGs35ZkDHBRC+c+ZBd66jBQdjTrUwcq9LPRvfZEFMzwitlRZzA==";

  crypto.pbkdf2(trpw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    console.log(buf.toString("base64"));
    let crpw = buf.toString("base64");
    if (pw == crpw) {
      console.log("비밀번호 동일");
    } else {
      console.log("비밀번호 불일치");
    }
  });
};
createCryptoPassword("test1234");
