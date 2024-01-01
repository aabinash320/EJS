var express = require('express');
var app = express.Router();
var con = require('../lib/db');


app.get('/', function(req, res, next) {
    con.query("SELECT * FROM server", (err, rows) => {
        if (err) throw err;
        res.render('users', { data: rows });
    });
});

app.get('/add', function(req, res, next) {
    
    res.render('users/add', {
        NAME: '',
        PASS: ''
    });
});
app.post('/add', function(req, res, next) {
    var name = req.body.NAME;
    var pass = req.body.PASS;

    if (name && pass) {
        con.query("INSERT INTO server (NAME, PASS) VALUES (?, ?)", [name, pass], function(err, results) {
            if (err) throw err;
            res.redirect('/users');
        });
    } else {
        console.log("Oops");
    }
});
//...

app.get('/edit/:id', function(req, res, next) {
    var id = req.params.id;
    con.query('SELECT * FROM server WHERE ID = ?', id, function(err, rows) {
      if (err) throw err;
       console.log(id);
        res.render('users/edit', {
            id : rows[0].id,
            NAME : rows[0].NAME,
            PASS : rows[0].PASS,
         });
      
    });
    console.log(id);
 
   app.post('/edit/:id',function(req,res,next){
   var name=req.body.NAME;
  var pass=req.body.PASS;
  console.log(id);
    con.query('UPDATE server SET NAME = ?, PASS = ? WHERE ID = ?', [name, pass, id], function(err, results) {
      if (err) throw err;
      res.redirect('/users');
    });
   })
});  


app.get('/delete/:id', function(req, res, next) {
    let id = req.params.id;
    con.query('DELETE FROM server WHERE ID= ?', id, (err, results) => {
      if (err) throw err;
      res.redirect('/users');
    });
  });module.exports = app;