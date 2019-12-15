let pet = {
    type: "Dog",
    name: "Rover",
    bark: function(animal){
      console.log(`${this.name} says hi to the ${animal}, my pet is a ${this.type}`)
    }
  }
  
  pet.bark('squirel');
  
  console.log(pet.name)

  let cat = {
    type: "Cat",
    name: "meow",
    bark: function(animal){
      console.log(`${this.name} says hi to the ${animal}, my pet is a ${this.type}`)
    }
  }

  let turtle = {
    type: "Turtle",
    name: "Burd",
    bark: function(animal){
      console.log(`${pet.name} says hi to the ${animal}, my pet is a ${pet.type}`)
    }
  }

  cat.bark('Gecko')

  turtle.bark('Human')

  class Person{

        constructor(name, age, occupation, countryOfOrigin, money){
            this.name = name;
            this.age = age;
            this.occupation = occupation;
            this.countryOfOrigin = countryOfOrigin;
            this.money = money;
            this.hp = 100;
        }    
    sayHi(){
            console.log(`${this.name} says hello!`)
        }    
    introduce(){
            console.log(`Welcome, my name is ${this.name}, I am ${this.age} years old, I am from ${this.countryOfOrigin} and I am a ${this.occupation}!`)
        }
    
    theThis(){
      console.log(this)
    }
    
    spendMoney(value){
      console.log(`${this.name} has this much money: ${this.money}`)
      this.money = this.money - value;
      console.log(`${this.name} has this much money left: ${this.money}`)
    }
    
    hit(target){
      console.log(target.hp)
      target.hp = target.hp - 10;
      console.log(`${target.name} has this much hp left: ${target.hp}`)
    }
    }
    
    
    
    
    const person = new Person('John', 24, 'Web Developer', 'Australia', 10000)
    
    const person1 = new Person('Janice', 23, 'Web Designer', 'Japan', 10000000000)
    
    
    person.sayHi();
    person.introduce();
    console.log(person.countryOfOrigin);
    person.theThis();
    
    person1.theThis();
    
    person.spendMoney(20);
    person1.spendMoney(5000);
    
    person1.hit(person);
    
    while(person.hp > 0){
      person1.hit(person)
    }


    
class Burger{
    constructor(topping){
      this.topping = topping;
      this.bun = "Sesame Bun";
      this.patty = "Ground Beef"
    }
  
    ingredients(){
      console.log(`The bun I am made from is: ${this.bun} and  I have ${this.patty}`)
    }
  }
  
  const cheeseBurger = new Burger('Cheese')
  
  cheeseBurger.ingredients();
  
  
  class ExpensiveBurger extends Burger{
    constructor(options){
      super(options);
      this.topping1 = options.topping1;
      this.topping2 = options.topping2;
      this.topping3 = options.topping3;
    }
  
    ingredients(){
          console.log(`The bun I am made from is: ${this.bun} and  I have ${this.patty}, I also have many toppings such as ${this.topping1},${this.topping2}, ${this.topping3} `)
    }
  }
  
  const truffleBurger = new ExpensiveBurger({topping1: 'truffles', topping2: 'Siracha Mayo', topping3: "lettuce"})
  
  truffleBurger.ingredients();

  
  class BasicPlaneParts {
    constructor(options){
      this.engine = options.engine;
      this.wings = options.wings;
    }
  
    fly(){
      console.log("The plane is flying")
    }
  }
  
  class PassengerPlane{
    constructor(options){
      this.plane = new BasicPlaneParts({engine: "Jet propultion engine", wings: "Stream lined wings"})
      this.passengers = options.passengers;
      this.food = options.food;
      this.destination = options.destination
    }
    feedPassengers(){
      console.log(`The passengers are being fed ${this.food}`)
    }
    whatsOnBoard(){
      console.log(`We have this many passengers: ${this.passengers} and alot of food: ${this.food}`)
    }
    whereAreWeGoing(){
      console.log("We are travelling to  " + this.destination)
    }
  }
  
  let hongKongExpress = new PassengerPlane({passengers: 120, food: "DimSum", destination: "Japan"})
  
  hongKongExpress.plane.fly()
  
  console.log(hongKongExpress['passengers'])
  
  console.log(hongKongExpress.food)
  
  hongKongExpress.feedPassengers();
  
  hongKongExpress.whereAreWeGoing();
  
// // Simple first.
// // class Rectangle{
// //     constructor(height, width, colour){
// //         this.name = "Rectangle";
// //         this.height = height;
// //         this.width = width;
// //         this.colour = colour;
// //     }
// // }

// // const simpleShape = new Rectangle(20, 5, "Red");

// // console.log(
// //     `The shape is called a ${simpleShape.name}, its height is:${simpleShape.height}, its width is ${simpleShape.width} and it is ${simpleShape.colour} coloured.`
// // );

// // The shape is called Rectangle, its height is:20, its width is 5 and it is Red coloured.


// // Complex shape
// class Circle {
//     constructor(options){
//         this.name = 'Circle';
//         this.diameter = options.diameter;
//         this.colour = options.colour;
//         this.radius = this.diameter/2;
//     }
//     area (){
//         let value = Math.PI * Math.pow(this.radius, 2);
//         value = value.toFixed(3)
//         console.log(`The area of the circle is: ${value}, it is a ${this.colour} coloured circle.`);
//     }
// }

// const complexShape = new Circle ({diameter: 10, colour: 'Blue'});

// complexShape.area() // The area of the circle is: 78.540, it is a Blue coloured circle.


// class Rectangle{
//     constructor(options){
//         this.name = "Rectangle";
//         this.height = options.height;
//         this.width = options.width;
//         this.colour = options.colour;
//     }
// }

// const simpleShape2 = new Rectangle({height: 40, width: 10, colour: 'Yellow'})

// // OR

// const options = {
//     height: 40,
//     width: 10,
//     colour: "Yellow"
// }

// const simpleShape2 = new Rectangle(options);
