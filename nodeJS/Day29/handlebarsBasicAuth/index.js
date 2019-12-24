// Require needed modules
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
//Set up middle ware and packages
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    realm: "My Application"
  })
);

const USERS = [
  {
    username: "john",
    password: "123"
  },
  {
    username: "tim",
    password: "abc"
  }
];

function myAuthorizer(username, password) {
  return USERS.some(user => {
    return user.username === username && user.password === password;
  });
}

app.engine("handlebars", hbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

//Array for menu
const pizzaMenu ={
    pizzas:[
        {
            "name":"Hawaiian",
            "price":"$hkd 98",
            "size":"18 inch"
        },
        {
            "name":"Pepperoni",
            "price":"$hkd 128",
            "size":"18 inch"
        },
        {
            "name":"Veggie",
            "price":"$hkd 88",
            "size":"18 inch"
        },
        {
          "name":"Veggie",
          "price":"$hkd 88",
          "size":"18 inch"
      }
    ]
};

app.use(express.static("./assets"));

//methods
app.get("/", (req, res) => {
  console.log(req.auth.user);
  console.log(req.auth.password);

  res.render("index");
});

app.get("/menu", (req, res) => {
  res.render("menu", pizzaMenu);
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/logout", function(req, res) {
  res.set("WWW-Authenticate", "Basic realm=Authorization Required");
  return res.sendStatus(401);
});

app.listen(5000, () => {
  console.log("Application listening to port 5000");
});
