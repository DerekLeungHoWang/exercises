const express = require('express');

const app = express();

const session = require('express-session');

const setupPassport = require('./initpassport');

const bodyParser = require('body-parser');

const router = require('./router')(express);

const port = process.env.PORT || 3030;
const https = require('https');
const fs = require('fs');

 

app.use(session({

    secret: 'supersecret',

    resave: false,

    saveUninitialized: true,

}));

 

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))

 

setupPassport(app);

 

app.use('/', router);

const options = {
    cert: fs.readFileSync('./localhost.crt'),
    key: fs.readFileSync('./localhost.key')
  };
  
console.log('listening at 3030');

  https.createServer(options, app).listen(3030);
