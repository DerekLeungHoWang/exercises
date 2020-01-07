const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    fs.readFile('notes.txt', (err, data) => {
        res.json(data)
    });
});

app.post('/', (req, res)=>{
    fs.writeFile('notes.txt', req.body.note, (err) => {
        res.json('OK')
    });
});

app.listen(8080);