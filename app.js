var http = require('http'); //Built-in Node Functionality

var express = require('express'); //Express for middleware
// var handlebars = require('express-handlebars').create({defaultLayout:"index"});
var path = require('path');
    //gulp = require('gulp');


var app = express();
// app.engine('handlebars',handlebars.engine);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.get('*',function(req,res){
    res.render("index");
    console.log("requested",req.url);
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on localhost:"+port);
});
