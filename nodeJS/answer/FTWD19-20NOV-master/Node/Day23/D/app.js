const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.send("Index!");
});

app.get('/:user', (req,res)=>{
   let user = req.params.user;
    res.send("Welcome to the index page " + user +  "!");
});


app.post('/api/message', (req, res)=>{
    console.log(req.body.message);
    res.send(req.body.message); 
});

app.listen(8080, function(){
    console.log(`Application listening to post 8080`);
});