const fs = require('fs');
const readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
console.log("saswat");
fs.writeFileSync('writeMe.txt',readMe);
