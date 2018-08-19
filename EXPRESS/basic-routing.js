const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('this is the homepage');

});

app.get('/about',function(req,res){
    res.send('this is the about');

});
app.get('/profile/:name',function(req,res){
    res.send('u requested to see a profile with the name of '+req.params.name);

});

app.listen(3000);