var express = require('express');
var bodyParser = require('body-parser')
var app = express(); // app gets access to  all the functionalities that express has
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');
var fileUpload = require('express-fileupload')
const path = require('path')
var fs = require('fs')
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload());
let caches = {};
const uploadDirectory = __dirname + path.sep + 'uploaded'

app.get('/', function(req,res){
    // res.send('this is the homepage');
    res.render('index');
});

function writeFile(file,data){
  return new Promise((resolve,reject)=>{
    console.log("before writeFile============>");
    
    fs.writeFile(uploadDirectory + path.sep + file, data, (err)=>{
      if(err){
        return reject(err)
      }else{
        resolve(file)
      }
    })
  }).then(readFile)
}

function readFile(file){ //why file as parameter, data?
  return new Promise((resolve,reject)=>{
    fs.readFile(uploadDirectory + path.sep + file,(err, data)=>{
      if(err){
        return reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

app.post('/contact/submitted', function(req,res){
  let file = req.files.upload.name
  let data = req.files.upload.data
  caches[file] = writeFile(file,data)
  

caches[file].then(()=>{
  res.send(`you have successfully uploaded ${file}`)
})
  
})

app.get('/contact', function(req,res){
  // res.send('this is the contact page')

  // console.log(req.query);
  
  res.render('contact', {qs:req.query});
});

app.get('/contact/submitted/:name',function(req,res){
    caches[req.params.name] = readFile(req.params.name)
   
    caches[req.params.name].then((data)=>{
      res.send(data)
    })
})

app.get('/profile/:name', function(req,res){
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
  res.render('profile', {person: req.params.name, data: data});
});



app.listen(8080);
//GET, what we make when we type url into an address bar
//POST, when we post some data from web from
//app.method('route', fn)
//no need to specify content type, express is smart

