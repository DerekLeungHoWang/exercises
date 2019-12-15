var http = require("http");
var fs = require("fs");
// fs.writeFileSync('readMe.txt');

// myReadStream.on('data', function(chunk){
//     myWriteStream.write(chunk);
// })

var http = require("http");
//request + request headers(content-type & status)
//response + response headers(content-type & status)
var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(8080);
