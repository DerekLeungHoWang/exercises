/*

let person = {
    name: "John",
    age: 35,
    phone: "iphone 11",
    weight: 88,
    height: 168
}

// returns an array of the values of the object person
let personValues = Object.values(person);
console.log(personValues);

// returns an array of the keys of the object person
let personKeys = Object.keys(person);
console.log(personKeys);

// returns an array of arrays, each element in the array are the key and value pairs of the object person
let personInfo = Object.entries(person);
console.log(personInfo);

// add a new key and value pair to the object person
person.gender = 'Male'

console.log(person)

// Target an object and prevent people from adding additional properties to it or stop them form changing the values on it. 

Object.freeze(person);
person.name = "Ivan"
person.favouriteJuice = "Orange"
console.log(person);

// Once an object is targeted you cannot add more properties into the object. But you can change the value of a key tht already exists
let objectToBeSealed = {
    name: "Bob"
}

Object.seal(objectToBeSealed);
objectToBeSealed.name = "Timmy"
objectToBeSealed.emotion = "Happy"
console.log(objectToBeSealed)


// spread attribute, allows for additional properties and values to be added to an object without mutations (creating a new object) combine multiple object together (Won't do nested copying.)
let student = {
    ...person,
    school: "Xccelerate Coding Bootcamp",
    currentGrade: "B",
    address: "Sino Plaza"
}

console.log(student);


// 
let soldier = {
    country: 'America',
    weapon: 'knife',
    deployed: true
}

let civilian = {
    militaryTraining : false,
    name: "Tim",
    netWorth: 40
}

// combine two distinct and defined objects, returns the combined unit. 
let hybrid = Object.assign(soldier, civilian);

console.log(hybrid);

*/

// let array = ['Cantaloupe', 'Apple', 'Strawberry', 'Grape', 'Tomato', 'Banana', 'Kiwi'];

// let letterArray = [ "R", "I", "G", "H", "T"];

// let numberArray = [ 15, 60, 4, 8, 10, 1 ];

// console.log(array.length);
// console.log(letterArray.join(''));
// console.log(array.sort());

// let capitalised = []

// array.map(element => {
//     capitalised.push(element.toUpperCase())
// });

// console.log(capitalised);

// let largerThanFive = array.filter(element => element.length > 5);
// let smallerThanFive = array.filter(element => element.length < 5);
// console.log(largerThanFive);
// console.log(smallerThanFive);

// let total = numberArray.reduce((acc, index)=>{
//    return  acc + index
// }, 0)

// console.log(total)

// let number = numberArray.reduce((acc, index)=>{
//     return acc + index
// }, 15)

// console.log(number)
// let word = letterArray.reduce((acc, index)=> {
//     return acc + index
// }, "")

// console.log(word)


// class Person{
//     constructor(name, age, occupation, countryOfOrigin){
//         this.name = name;
//         this.age = age;
//         this.occupation = occupation;
//         this.countryOfOrigin = countryOfOrigin;
//     }

//     sayHi(){
//         console.log(`${this.name} says hello!`)
//     }

//     introduce(){
//         console.log(`Welcome, my name is ${this.name}, I am ${this.age} years old, I am from ${this.countryOfOrigin} and I am a ${this.occupation}!`)
//     }
// }


// const person = new Person('John', 24, 'Web Developer', 'Australia')

// person.sayHi();
// person.introduce();
// console.log(person.countryOfOrigin);
