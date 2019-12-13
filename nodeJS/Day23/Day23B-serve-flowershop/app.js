const express = require('express')
const app = express();

app.use(express.static('flowershop'))

app.listen(8080, function(){console.log('listening at 8080')})