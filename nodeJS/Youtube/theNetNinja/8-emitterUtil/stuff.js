


module.exports.counter  = function(arr){
    return 'There are ' + arr.length + ' element in this array';
};

module.exports.adder  = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;


//Second way
// module.exports.counter = counter; // counter property equals the counter function
// module.exports.adder = adder;
// module.exports.pi = pi;

//Third way
//module.exports = {
//     counter: counter,
//     adder: adder,
//     pi:pi
// };
 