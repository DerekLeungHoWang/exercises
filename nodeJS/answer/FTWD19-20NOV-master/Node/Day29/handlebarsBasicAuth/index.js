// Require needed modules
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const basicAuth = require('express-basic-auth');

// Set up middle ware and packages
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    realm: "My Application"
}));

const USERS = [
    {
        "username": "john",
        "password": "123"
    },
    {
        "username": "tim",
        "password": "abc"
    }
]

function myAuthorizer(username, password){
    return USERS.some((user)=>{
        return user.username == username && user.password == password
    })
}

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Handle requests and responses to our server
app.get('/', (req, res)=>{
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');


    console.log(req.auth.user)
    console.log(req.auth.password)
    res.render('index');
});

app.get('/other', (req, res)=>{
    res.render('other')
})

app.get('/logout', function (req, res,) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.status(401).send('<a href="/">Start again?</a>')

  });



// Set the listening port of the application
app.listen(8080,()=>{   
    console.log(
        'Application listening to port 8080'
    )
});