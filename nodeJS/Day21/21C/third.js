var toAlphabet = require('./second');
var randomNumber = require('./first');

var randomLetters =(number)=>{

var count = "";
for (let i = 0; i < number; i++) {
    count += toAlphabet(randomNumber())
    
}
 console.log(count);

 

}

module.exports = randomLetters;