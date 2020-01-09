const express = require('express');
const app = express();
const redis = require('redis');
const bodyParser = require('body-parser');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
    auth_pass: 'test123'
});

client.on('error', function (err) {
    console.log(err);

})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body.content);// can define body.XXX as what you want
    console.log(req.body.data, 'LINE 21')
    if( req.body.data instanceof Array){
            console.log("TRUE line 24");
            
        req.body.data.forEach((elem)=>{
            client.lpush('newList', `${elem}`, function (err) {
                if (err){
                    return console.log(err)
                };
            });
        })
        res.send('Well done');

    } else {
          client.lpush('newList', `${req.body.data}`, function (err) {
        if (err){
            return console.log(err)
        };
        res.send('Well done');
    });
    }

  
});

function start(){
    setTimeout(getItem, 1000);
    console.log('running');
    
};

function getItem(){

    client.RPOP('newList', function(err, data){
    if(err){
        console.log(err);
        start();
        return
    };

    if(data === null){
        console.log('No items in the list');
        start();
       return;
    }

    console.log(`Data retrieved, item = ${data}`)
    
    setTimeout(function(){
        console.log('Finished getting last item, going to get another..')
        start();
    }, 2000)

})
}

start();

app.get('/data', (req, res)=>{
    client.sort('newList', 'ALPHA', function(err, data){
        if(err){
            return console.log(err);
        };
        console.log(`Data returned is ${data}`)
        res.end( `${data}`)
    })

    client.lrange('newList', 0, 10, function(err, data){
        if(err){
            return console.log(err);
        };
    
        console.log(`Data retrieved: ${data}`)
    });
//==========delete==============

})




app.listen(7000, ()=>{
    console.log('Application listening to port 7000')
})