// clients send request to server
// server handle the request, send back the response
// Protocols ftp = file transfer Protocols
// TCP is the way the server send back response to clients
//Ports is a programming running on a computer can listen for requests sent to a particular
//number

var http = require('http');
//request + request headers(content-type & status)
//response + response headers(content-type & status)
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hey ninjas");
});

server.listen(8080)