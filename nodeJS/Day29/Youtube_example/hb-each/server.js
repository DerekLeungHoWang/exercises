const express = require('express');
const app = express();
const expbs = require('express-handlebars');

app.engine('handlebars', expbs({ 
    defaultLayout: 'main',
    
 }));
app.set('view engine', 'handlebars');

//Routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Derek',
        age: 24,
        isDisplayName: false
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate cum maiores voluptatem dolor officiis illum explicabo deserunt distinctio harum ducimus eum a doloremque officia, fugit ex laborum inventore, voluptatibus corporis!'
    });
})
app.get('/dashboard', (req,res)=>{
    res.render('dashboard', {
        isListEnabled: false
    });
})

app.get('/each/helper', (req,res)=>{
    res.render('contact',{
        people: [
            "james",
            "Peter",
            "Sadrack",
            "Morissa"
        ],
        user:{
            username:'DerekLeung',
            age:24,
            phone:92591883
        },
        lists: [
            {
                items:['Mango', 'Banana', 'Pineapple']
            },
            {
                items:['Potato', 'Manioc', 'Avocado']
            }
        ]
    });
})


app.listen(8000, () => {
    console.log('Server is starting at port', 8000);

})