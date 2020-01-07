const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

let myEventEmitterInstance = new MyEmitter();

myEventEmitterInstance.on('call', (name)=>{
    console.log(`${name} says hellloo!`)
    sayHi(name)

});

myEventEmitterInstance.on('reply', (name)=>{
    console.log('Hello ' + name)
});

function sayHi (name){
    console.log('Saying Hello')
    myEventEmitterInstance.emit('reply', name);
}

module.exports = myEventEmitterInstance;