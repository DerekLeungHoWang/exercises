const tripler = (number) => {
    return number * 3;
}

function logger(string){
    return console.log(string);
}

let adder = function (param1, param2){
    return param1 + param2
}

module.exports = tripler;
module.exports.logger = logger;
module.exports.addTogether = adder;