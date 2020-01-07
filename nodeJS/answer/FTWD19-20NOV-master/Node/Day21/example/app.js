const express= require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Wow you got a page')
});

app.listen(9999, ()=>{
    console.log('application running at port 9999');
})