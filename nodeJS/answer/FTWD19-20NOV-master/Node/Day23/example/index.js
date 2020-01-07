// Require packages needed
const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Setup the express package
const app = express();

// setup middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.get('/', function(req, res){
    res.end('Hello FTWDNovember2019')
});

app.get('/hong-kong', function(req, res){
    console.log(req.query);
    let food = req.query.food
    res.end('Hello Hong Kong ' + food);
});

app.get('/hong-kong/:name/:age', function(req, res){
   let {name, age} = req.params
    console.log(req.params);
    res.end(`Hello Hong Kong, my name is ${name}, I am super old like this old: ${age}`);
});

app.post('/info', function(req, res){
    let {name, age} = req.body
    console.log(req.body);
    res.end(`Hello Xccelerate! I am ${name}, I am ${age} years old.`);

})

app.listen(8080, function(){
    console.log('application listening to port 8080')
})

