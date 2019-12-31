//inbuilt
const fs = require('fs');

// modules npm install
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const AuthChallenger = require('./AuthChallenger')
const NoteService = require('./services/NoteService');
const path = require('path');
const hb = require('express-handlebars');

// middlewares
app.engine('handlebars', hb({defaultLayout:'main'}));
app.set('view engine','handlebars')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
const config = require('./stores/config.json')['development']
//Router
const NoteRouter = require('./routers/NoteRouter');
//Service
const noteService = new NoteService(path.join(__dirname, config.notes));
//Serve static file
app.use('/', express.static('public'))

//Use basic auth
app.use(basicAuth({
    authorizer: AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))), // we are defining the file where our users exist with this code: JSON.parse(fs.readFileSync(path.join(__dirname, config.users))), we also parse the data so that we can iterate over each user like a JavaScript variable/ object. 
    challenge: true,
    realm: 'Note Taking Application',

}));


//GET data from api
app.use('/api/notes', new NoteRouter(noteService).router());

// Render html
app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(config.port, ()=> console.log(`Note Taking APP listening at port ${config.port}`)
);
module.exports = app;