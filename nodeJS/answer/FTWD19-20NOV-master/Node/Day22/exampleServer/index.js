let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/bootstrapWebsite/index.html').pipe(res);
    } else if(req.url === 'styles.css'){
        fs.createReadStream(__dirname + '/bootstrapWebsite/style.css').pipe(res);
    }
    }).listen(8080)
