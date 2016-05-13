"use strict"
var http = require('http'); //Built-in Node Functionality

var express = require('express'); //Express Middleware
var exHandlebars = require('express-handlebars'); //Handlebars for Express
var path = require('path'); //Path is used to concatenate paths for multiplatform stability
var _ = require('underscore'); //underscore for simplifying array selection among other tools.
var gulp = require('gulp');
var less = require('gulp-less'); //underscore for simplifying array selection among other tools

var data = require('./public/js/data'); //Pulling in sample js object data

var app = express();
app.engine('handlebars', exHandlebars({ defaultLayout: 'default'}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');
app.use(express.static('bower_components'));
app.use(express.static('public'));

app.get('/',function(req,res){ // Main function of the app is at the root
    res.render("index",_.first(data,4)); //render index.handlebars, pass in data for the first for items.
});

app.get('/api',function(req,res){ //3rd Party data can be accessed like API through '/api' path
    res.send(data);
});

var port = process.env.PORT || 3000; //sets port depending on environment, otherwise port 3000

app.listen(port, function(){
    console.log("Listening on localhost:"+port);
});
