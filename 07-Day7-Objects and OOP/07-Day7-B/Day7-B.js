class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.health = options.health;
        this.strength = options.strength;
    }

    attack(opponent){
        let counter = 0;
        
            console.log(`${this.name} attacked ${opponent.name}, he has done ${this.strength} worth of damage.`)
            opponent.health -= this.strength;
            console.log(`${opponent.name} has ${opponent.health} left`);
            counter++;
            console.log(counter);

            if(counter === 5){
                this.heal(opponent);
            }

        if(opponent.health <= 0){
            console.log(`${this.name} is the winner`)
        }
    }

    heal(opponent){
        opponent.health += 100
        console.log(`${opponent.name} used a HP potion to heal 500 points of his health, now he has ${opponent.health} health left`)
    }

    
}

const hero = new Person({name:"Ironman", age:54, health:100, strength:20 });
const boss = new Person({name:"Thanos", age:29, health:100, strength:20 });


let character = [hero,boss];



const fight =()=>{



while(hero.health>0 && boss.health > 0 ){
let randomCharacter = character[Math.floor(Math.random() * character.length)]

    if(randomCharacter === hero){
       
         hero.attack(boss)

    }else {
        boss.attack(hero)
    }

}

}
fight();

