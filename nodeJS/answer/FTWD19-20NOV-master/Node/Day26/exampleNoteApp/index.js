const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const NoteService = require('./NoteService');

app.use(bodyParser.urlencoded({extended: false}));

const noteService = new NoteService();

app.get('/', (req, res)=>{
    res.json(noteService.listNote())
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