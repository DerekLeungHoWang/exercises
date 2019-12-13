const EventEmitter = require('events');
const Player = require('./player');
cons Computer = require('./computer');

class Referee extends EventEmitter{
    constructor(){
        super();
        this.on('playerReady', (playerInput)=>{
            this.playerInput = playerInput;
            this.emit('otherPlayerTurn');
        });

        this.on('computerReady'), (computerInput) =>{
            this.computerInput = computerInput;
            console.log(computerInput);
            
            
        }
    }
}
