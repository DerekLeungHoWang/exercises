var http = require("http");
var fs = require("fs");
// fs.writeFileSync('readMe.txt');

// myReadStream.on('data', function(chunk){
//     myWriteStream.write(chunk);
// })

var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  // var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(8080);
