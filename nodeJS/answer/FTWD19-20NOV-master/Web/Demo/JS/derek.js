class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.health = options.health;
        this.strength = options.strength;
    }
    attack(opponent){
        // let counter = 0;
        while(opponent.health > 0 ){
            console.log(`${this.name} attacked ${opponent.name}, he has done ${this.strength} worth of damage.`)
            opponent.health -= this.strength;
            console.log(`opponent has ${opponent.health} left`);
            // counter++;
            // console.log(counter);
            // if(counter === 5){
            //     this.heal(opponent);
            // }
        }
        if(opponent.health <= 0){
            console.log(`${this.name} is the winner`)
        }
    }
    // heal(opponent){
    //     opponent.health += 100
    //     console.log(`${opponent.name} used a HP potion to heal 500 points of his health, now he has ${opponent.health} health left`)
    // }
 }
 const hero = new Person({name:"Ironman", age:54, health:900, strength:20 });
 const boss = new Person({name:"Thanos", age:29, health:300, strength:140 });
 let character = [hero,boss];
 let randomCharacter = character[Math.floor(Math.random() * character.length)]
 const fight =()=>{
    if(randomCharacter === hero){
        return hero.attack(boss)
    }else if(randomCharacter === boss){
        return boss.attack(hero)
    }
 }
 fight();