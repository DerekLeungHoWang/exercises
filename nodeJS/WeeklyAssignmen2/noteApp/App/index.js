// modules needed
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const NoteService = require('./services/NoteService');
const path = require('path');
const hb = require('express-handlebars');
// middlewares
app.engine('handlebars', hb({defaultLayout:'main'}));
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
//Router
const NoteRouter = require('./routers/NoteRouter');
//Service
const noteService = new NoteService(__dirname + '/stores/notes.json');
//Serve static file
app.use('/', express.static('public'))
//GET data from api
app.use('/api/notes', new NoteRouter(noteService).router());

// Render html
app.get('/',(req,res)=>{
    res.render("index");
})





// app.get('/', (req, res)=>{
//     console.log('get notes server code')
//     // when returning a promise you must get the data in a .then so that you can send it otherwise its a promise pending. You should know better sam!

//     // res.json(noteService.listNote())
//     noteService.listNote().then((data)=>{
//         console.log("<><><><><><>" + data)
//         res.json(data)
//     }).catch((err)=>{
//         console.log(err)
//         res.status(500).send(err)
//     })
// });

// app.post('/', (req, res)=>{
//     noteService.addNote(req.body.content)
//     res.json('OKAY');
// });
// app.post('/insert', (req, res)=>{
//     noteService.insertNote(req.body.index, req.body.content);
//     res.json('Okay new note inserted')
// })

app.listen(8080, ()=> console.log("listening at port 8080")
);