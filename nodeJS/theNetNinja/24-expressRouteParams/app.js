var express = require('./node_modules/express');

var app = express(); // app gets access to  all the functionalities that express has

app.get('/', function(req,res){
    res.send('this is the homepage');
});

app.get('/contact', function(req,res){
  res.send('this is the contact page')
});

app.get('/profile/:name', function(req,res){
  res.send('You requested to see a profile with the name of ' + req.params.name)
});



app.listen(8080);
//GET, what we make when we type url into an address bar
//POST, when we post some data from web from
//app.method('route', fn)
//no need to specify content type, express is smart

