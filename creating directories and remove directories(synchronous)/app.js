const fs=require('fs');
// fs.mkdir('stuff',()=>{
//     fs.readFile('readMe.txt','utf8',(err,data)=>{
//         fs.writeFile('./stuff/writeMe.txt',data);
//     });
// });
fs.unlink('./stuff/writeMe.txt',()=>{
fs.rmdir('stuff');
});


