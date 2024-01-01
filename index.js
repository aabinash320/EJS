
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var connection  = require('./lib/db');
var usersRouter = require('./routes/users');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/users', usersRouter);
app.listen(1909,function(err){
    if(err){
        console.log("port is not running..");
    }else{
        console.log(" port is running successfully");
    }
})
 