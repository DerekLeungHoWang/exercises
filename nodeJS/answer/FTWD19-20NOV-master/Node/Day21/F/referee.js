const EventEmitter = require('events');
const Player = require('./player');
const Computer = require('./computer');

class Referee extends EventEmitter {
    constructor() {
        super();

        this.on('playerReady', (playerInput) => {
            this.playerInput = playerInput;
            this.emit('otherPlayerTurn');
        });

        this.on('computerReady', (computerInput) => {
            this.computerInput = computerInput;
            console.log(computerInput)
            this.emit('resultReady', this.judge());
        });
    }

    start() {
        this.emit('firstPlayerTurn');
    }

    judge() {
        const computer = this.computerInput;
        const player = this.playerInput;
        if (computer == player) return 'draw!';

        if (computer == 'scissors') {
            if (player == 'rock') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'paper') {
            if (player == 'scissors') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'rock') {
            if (player == 'paper') return 'player wins';
            return 'computer wins'
        }

        return 'player wins';
    }
}

const referee = new Referee();
const player = new Player(referee);
const computer = new Computer(referee);

referee.on('firstPlayerTurn', function (){
    let input = "paper"
    player.play(input);
    console.log(`Player plays ${input}`)
});

referee.on('otherPlayerTurn', function (){
    computer.emit('computerTurn');
});

referee.on('resultReady', function(results){
    console.log(results)
});

referee.start();

referee.judge();


/*

Define our classes Player, Computer, Referee
Referee is the module where we need to be able to access the computer turn and player
put the referee into the Player and Computer classes to the referee access to both the player/ computer turn on an event emission. 
define a method on both player and computer to decide what to play
to allow the referee class to acess the data we use the event emitter to pass along the data. 
referee class define the start and judge functions so that you can define who has won. 

create your instance variables of Referee.  Player and Computer and pass the referee object in as part of the constructor. 

*/