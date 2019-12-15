 var stuff = require('./count') //var counter is equal to whatever is returned from index.html

var time = 0;



    console.log(stuff.counter(['shaun', 'crystal', 'ryu']));


setTimeout(() => {
    console.log(stuff.adder(1,3));
}, 1000);

setTimeout(() => {
    console.log(stuff.adder(stuff.pi, 5));
    
}, 2000);



