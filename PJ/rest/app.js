const fs = require('fs')
const express = require('express');
const hbs = require("express-handlebars");
const app = express();
const path = require('path')
const OrderService = require('./service/OrderService');
const OrderRouter = require('./routers/OrderRouter')
const bodyParser = require('body-parser')
const AuthChallenger = require('./AuthChallenger.js')
const basicAuth = require('express-basic-auth');

//template engine
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const config = require('./stores/config.json')['development'];
//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("public"));

//basic-auth
app.use(basicAuth({
    authorizer: AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))), // we are defining the file where our users exist with this code: JSON.parse(fs.readFileSync(path.join(__dirname, config.users))), we also parse the data so that we can iterate over each user like a JavaScript variable/ object. 
    challenge: true,
    realm: 'Food Application',

}));


//routing
const orderService = new OrderService(path.join(__dirname, config.orders));
console.log("LINE34, app.js");
console.log(path.join(__dirname, config.orders));
app.use('/api/orders', new OrderRouter(orderService).router());

app.get('/',(req,res)=>{
    res.render("pizzaIndex");
})

app.get('/cart',(req,res)=>{
    res.render("cart");
})

app.post('/')


app.listen(config.port, ()=> console.log('listening at 8080')
)

module.exports = app;