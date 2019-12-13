var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/') {

        let path = 
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(response);
    } else if (request.url === '/assets/logo.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/logo.png').pipe(response);
    } else if (request.url === '/assets/flower-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/flower-icon.png').pipe(response);
    } else if (request.url === '/assets/payment-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/payment-icon.png').pipe(response);

    } else if (request.url === '/assets/phone-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/phone-icon.png').pipe(response);

    } else if (request.url === '/assets/truck-icon.png') {
        fs.createReadStream(__dirname + '/flowershop/assets/truck-icon.png').pipe(response);

    } else if (request.url === '/assets/flowershop.jpg') {
        fs.createReadStream(__dirname + '/flowershop/assets/flowershop.jpg').pipe(response);

    } else if (request.url === '/stylesheet.css') {
        fs.createReadStream(__dirname + '/flowershop/stylesheet.css').pipe(response);

    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(8080, '127.0.0.1')