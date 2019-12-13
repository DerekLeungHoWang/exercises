var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req,res){
    res.send('hello')
});

app.post('api/message', function(req,res){
    

    res.send()
})


app.listen(8080,function(){
    console.log('listening at port 8080')
})