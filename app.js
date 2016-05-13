var http = require('http'); //Built-in Node Functionality

var express = require('express');
var exHandlebars = require('express-handlebars'); //Express for middleware
var path = require('path'); //Path is used to concatenate paths for multiplatform stability
var _ = require('underscore'); //underscore for simplifying array selection
    //gulp = require('gulp');

var data = require('./data');

var app = express();
app.engine('handlebars', exHandlebars({ defaultLayout: 'default'}));
// app.engine('handlebars',handlebars.engine);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');
app.use(express.static('bower_components'));

app.get('/',function(req,res){
    res.render("index",_.first(data,4));
    console.log("requested",req.url);
});

app.get('/api',function(req,res){
    res.send(data);
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on localhost:"+port);
});
