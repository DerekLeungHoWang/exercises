const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const NoteService = require('./NoteService');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const noteService = new NoteService(path.join(__dirname + '/notes.json'));

app.get('/', (req, res)=>{
    console.log('get notes server code')

    // when returning a promise you must get the data in a .then so that you can send it otherwise its a promise pending. You should know better sam!

    // res.json(noteService.listNote())


    noteService.listNote().then((data)=>{
        console.log(data)
        res.json(data)
    }).catch((err)=>{
        console.log(err)
        res.status(500).send(err)
    })
});
app.post('/', (req, res)=>{
    noteService.addNote(req.body.content)
    res.json('OKAY');
});
app.post('/insert', (req, res)=>{
    noteService.insertNote(req.body.index, req.body.content);
    res.json('Okay new note inserted')
})

app.listen(8080);