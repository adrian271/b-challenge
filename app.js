var http = require('http'); //Built-in Node Functionality

var express = require('express');
var exHandlebars = require('express-handlebars'); //Express for middleware
// var handlebars = require('express-handlebars').create({defaultLayout:"index"});
var path = require('path'); //Path is used to concatenate paths for multiplatform stability
    //gulp = require('gulp');


var app = express();
app.engine('handlebars', exHandlebars({ defaultLayout: 'default'}));
// app.engine('handlebars',handlebars.engine);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');
app.use(express.static('bower_components'));

app.get('/',function(req,res){
    res.render("index",{name:"adrian"});
    console.log("requested",req.url);
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening on localhost:"+port);
});
