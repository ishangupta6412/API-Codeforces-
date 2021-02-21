const fs=require("fs");
const text = fs.readFileSync("abcd.txt","utf8");
console.log(text);