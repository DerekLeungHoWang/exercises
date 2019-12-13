const myEventEmitterInstance = require('./event2');

let name = "Ip Man"
myEventEmitterInstance.emit('call', name )



myEventEmitterInstance.on('reply', ()=>{
    console.log('Hello ' + name);
    
})