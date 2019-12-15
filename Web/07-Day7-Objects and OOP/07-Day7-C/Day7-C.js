class Monster{
    constructor(options){
        this.name = options.name;
        this.health = options.health;
        
    }

    wounded(rngDamage){
        while(Dragon.health > 0){
            let rngDamage =  Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            console.log("rng damage is " + rngDamage);
            Dragon.health -= rngDamage;
            console.log("Dragon remaining health is " + Dragon.health);
        }

    }    
}

const Dragon = new Monster({name:"FireDragon", health:100});


const fight =()=>{
    let rngDamage =  Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    
    return Dragon.wounded(rngDamage);

}

fight();

