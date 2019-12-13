const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

let myEventEmitterInstance = 
new MyEmitter();

myEventEmitterInstance.on('call', (name)=>{
    console.log(`${name} says hello!`);   

    myEventEmitterInstance.emit('reply')
});



module.exports = myEventEmitterInstance;