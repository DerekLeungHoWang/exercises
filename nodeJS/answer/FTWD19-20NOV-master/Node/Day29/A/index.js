const express = require('express');
const app = express();
const hb = require('express-handlebars');
const basicAuth = require('express-basic-auth');
const fs = require('fs');

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    authorizeAsync: true,
    realm: 'My Application',
}));

function myAuthorizer(username, password, callback) {

        const USERS = fs.readFileSync('./users.json', 'utf-8', async (err, data) => {
            if (err) {
                throw err
            }
            return await data
        });
    
        let parsed = JSON.parse(USERS);
    
        let user = parsed.users.filter((user) => user.username == username);
        if (user[0].username === username && user[0].password === password) {
            return callback(null, true);
        } else {
            return callback(null, false);
        }
    };

app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index')
});

app.get('/gallery', (req,res)=>{
    res.render('gallery')
});
const pizzas = {
    pizza: [
        {
            "crust": "Thick","name":"Pepperoni", "toppings": ["Cheese", "Pepperoni"], "price": "HKD145", "image": "./Pepperoni.jpg"
        },
        {
            "crust": "Thick","name":"Hawaiian", "toppings": ["Cheese", "Ham", "Pineapple"], "price": "HKD 1", "image": "./hawaiian_pizza.jpg"
        },
        {
            "crust": "Thick","name":"Four Cheese", "toppings": ["Cheddar", "Mozzarella", "Blue cheese", "Peccorino"], "price": "HKD 160", "image": "./four-cheese-pizza.jpg"
        },
        {
            "crust": "Thin", "name":"Margherita", "toppings": ["Cheese", "Fresh Tomato"], "price": "HKD 130", "image": "./margharita.jpg"
        }
    ]
};

app.get('/menu', (req, res)=>{
    res.render('menu',pizzas);
});

app.listen(8080, ()=>{
    console.log(`App is listening on port 8080`);
});
