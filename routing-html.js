var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');

});

app.get('/about',function(req,res){
    res.sendFile(__dirname +'/about.html');

});
app.get('/profile/:name',function(req,res){
    res.render('profile',{person:req.params.name});

});

app.listen(3000);