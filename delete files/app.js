const fs = require('fs');
 fs.readFile('readMe.txt','utf8',(err,data)=>{
     console.log(data);
     fs.writeFile('writeMe.txt',data);
 });
console.log("saswat");
