const http=require('http');
const fs = require('fs');


const server=http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    if(req.url === '/home' || req.url=== '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/about.html').pipe(res); 
    }
    else if(req.url === '/api/saswat'){
        let myObj = {
            name:'Saswat',
            age:'24',
            job:'UI'
        };
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(myObj));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res); 
    }
});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');