const http=require('http');
const fs = require('fs');
const myReadStream = fs.createReadStream(__dirname + '/read.txt','utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
myWriteStream.write(chunk);
});