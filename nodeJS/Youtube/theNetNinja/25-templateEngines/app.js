var express = require('express');

var app = express(); // app gets access to  all the functionalities that express has

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    // res.send('this is the homepage');
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
  // res.send('this is the contact page')
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja'}
  res.render('profile', {person: req.params.name, data: data});
});



app.listen(8080);
//GET, what we make when we type url into an address bar
//POST, when we post some data from web from
//app.method('route', fn)
//no need to specify content type, express is smart

