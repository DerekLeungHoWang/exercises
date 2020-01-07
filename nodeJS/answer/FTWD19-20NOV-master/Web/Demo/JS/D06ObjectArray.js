 
 // Method One
//  let student  = new Object();

//  console.log(student);
//  student.name = "Johnathan";
//  student.gender = "Male";
//  student.age = 89;
//  student.hello = function(){
//    console.log("hello my name is " + student.name );
//  }

//  console.log(student);

//  console.log(student.name);

//  student.hello()


// Object creation II

// let fasterObject = {
//   age: 20,
//   name: "Timothy",
//   occupation: "Fireman",
//   married: false,
//   sayHello: function (){
//   console.log('hello world ');
// }
// }

// console.log(fasterObject.name)
// fasterObject.sayHello()

// for (let key in fasterObject){
//     if(fasterObject.hasOwnProperty(key)){
//       console.log(key + " ==> " + fasterObject[key])
//     }
//   }


let person = {
    name: "Sam",
    age: 27,
    phone: "Iphone 5",
    height: 163,
    weight: 65
  }
  
  let personValues = Object.values(person);
  console.log(personValues);
  
  let personKeys = Object.keys(person);
  console.log(personKeys);
  
  let personsKeyValues = Object.entries(person);
  console.log(personsKeyValues);
  
  // Object.freeze(person);
  
  person.occupation = 'Pancake flipper';
  
  console.log(person)
  console.log(person.occupation)
  
  // Object.seal(person);
  
  person.shoeSize = 7;
  console.log(person)
  
  let student = {
    ...person,
    school: "Xccelerate Coding Bootcamp",
    address: "Sino Plaza, CWB",
    currentGrade: "F"
  }
  
  console.log(Object.entries(student))
  console.log(student);

  // let cusine = [ "Italian", "French", "German", "Si Chuan", "Japanese"];

// let cusineLength = cusine.length
// console.log(cusineLength);

// let jointCusine = cusine.join()
// console.log(jointCusine)

// let array = ["R", "I", "G", "H", "T"];

// console.log(array.join(''));

// console.log(array.sort());

// let array1 = [ 1, 55, 3213, 567, 2, 67, 8];
// console.log(array1.sort(function(a, b){
//   return   a - b
// }));

// let fruit = ['Apple', 'Banana', 'Cantaloupe', "Durian", 'Mango', ];

// let capitalFruit = fruit.map(element => element.toUpperCase());

// console.log(capitalFruit)

// function findFruit(input){
//   console.log(`Finding the ${input}`);
// }

// fruit.map(element => findFruit(element))


// let x2 = numbers.map(element => element 
// * 2)

// function times2(input){
//  return input * 2
// }

// let otherX2 = numbers.map(element => times2(element))

// console.log(otherX2)

// let oddNumbers = [];

// let result = numbers.map(element => {

//   if(!(element % 2 === 0)){
//   oddNumbers.push(element)
//   }

// })

// console.log(oddNumbers);

// let smallerThanThreeOREqual = numbers.filter(element => element <= 3);

// console.log(smallerThanThreeOREqual)

let numbers = [1,2,3,4,5,734,212,12,99]


let total = numbers.reduce((accumalator, index)=>{


  console.log(accumalator, index)


  return accumalator + index


}, 0)

console.log(total)

let array = ["R", "I", "G", "H", "T"];

let string = array.reduce((acc, index)=> {
  return acc + index
}, '')
console.log(string)