var http = require("http");
var fs = require("fs");

var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": 'application/json' });
  var myObj = {
    name: 'Ryu',
    job:'Ninja',
    age: 29
  };
//res.end() expects either STRING or BUFFER, so we cannot do res.end(obj)
  res.end(JSON.stringify(myObj));
});

server.listen(8080);
