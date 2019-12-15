var fs = require('fs');
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff');


// //Async way
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFileSync('./stuff/writeMe.txt', data)
//   })
// });

fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdirSync('stuff');
})
