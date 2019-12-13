var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/file.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

let path = '/Users/howangleung/Desktop/'
var writeable = fs.createWriteStream(path + '/texffftcopy.txt');

readable.pipe(writeable);

var myArray = []
consol.