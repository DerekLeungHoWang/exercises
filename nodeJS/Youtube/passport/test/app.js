const express = require('express');

const app = express();

const session = require('express-session');

const setupPassport = require('./init-passport');

const bodyParser = require('body-parser');

const router = require('./router')(express);

const port = process.env.PORT || 3030;

const fs = require('fs');
const https=require('https');


setupPassport(app);

app.use(session({

    secret: 'supersecret',

    resave: false,

    saveUninitialized: true,

}));

 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))

 


 

app.use('/', router);

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };
 

https.createServer(options, app).listen(port)