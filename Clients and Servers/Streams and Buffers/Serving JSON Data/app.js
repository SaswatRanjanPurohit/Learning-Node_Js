const http=require('http');
const fs = require('fs');

const server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    let myObj = {
        name:'Saswat',
        age:'24',
        job:'UI'
    };
    res.end(JSON.stringify(myObj));

});
server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');