const mysql = require ('mysql');
const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"data",
});
con.connect(function(err){
    if(err){
        console.log("Not Connected");
    }else{
        console.log("Database connected Successfully...!");
    }
});
module.exports = con ;