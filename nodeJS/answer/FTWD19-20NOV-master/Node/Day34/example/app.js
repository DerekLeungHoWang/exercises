const express = require('express');
const basicAuth = require('express-basic-auth');
const AuthChallenger = require('./AuthChallenger');

const app = express();
const knexConfig = require('./knexfile').development;

const knex = require('knex')(knexConfig)

app.use(basicAuth({
    authorizer: AuthChallenger(knex),
    challenge: true,
    authorizeAsync: true,
    realm: 'Note Taking Application With Knex'
}));

app.get('/', (req, res)=>{
    res.send(`You have logged in asynchronously! Yay`)
})


app.listen(8080, ()=>{
    console.log('application listening to port 8080');
});