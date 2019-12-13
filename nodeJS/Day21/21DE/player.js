const EventEmitter = require('events');

module.exports = class Player extends EventEmitter{
    constructor(referee){
        super();
        this.referee = referee
    }
    play(input){
        this.referee.emit('playerReady',input)
    }
}