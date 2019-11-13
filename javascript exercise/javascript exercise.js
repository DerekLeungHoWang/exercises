// /****************************
// Exercise 1 Object programming
// *****************************/

// var person = {
//     firstName:"Ho Wang", 
//     lastName:"Leung", 
//     age:24,
//     email:"hkz88i00123@gmail.com"
//     };


// /****************************
// Exercise 2 Shopping List array – for loop
// *****************************/

// var shoppingList,i;

// shoppingList = ["Beans", "Apples", "Chocolate", "Dense Bread"];

// for(i = 0;i < shoppingList.length; i++){
    
//     console.log(shoppingList[i]);    
// }


// /****************************
// Exercise 3 Function question
// *****************************/

// function myFunction(anyString){
//     console.log(anyString)
// };

// myFunction("Hello");

// /****************************
// Exercise 4 Function question
// *****************************/


// function evenNumberTester(){
//   var num;
//     //num = prompt("Please enter a number.");
    
//     if(num%2===0){
//         return true;
//     }else{
//         return false;
//     } 
// };

// console.log(evenNumberTester());

// /****************************
// Exercise 5 Function question
// *****************************/

// function concatenation(str1, str2){
        
//    var combined = str1 + " " + str2;
//     console.log(combined); 
// }

// concatenation("Hello","World");


// /****************************
// Exercise 6 for loop
// *****************************/


// var checkPrime = function() {
//     var c = 0;
//     for (i = 1; i < 100; i++) {
        
//     for (j = 2; j <= i; j++) {
//         if (i % j === 0) {
//         c++;    
//         }
//     }

//     if (c === 1) {
//         console.log("optimus prime");
//     }else if(c !== 1){
//         console.log(i);

//     }
//     c = 0;
//     }
// }
// checkPrime();




// /****************************
//
// *****************************/

// var FIZZBUZZ = function(){
  
//   for(var i =1; i <= 100; i++){
//     if(i%3 === 0){
//         console.log("fizz");
//     }else if(i%5 === 0){
//       console.log("BUZZ");
//     }else if(i%5 === 0 && i%3 ===0){
//       console.log("BUZZFIZZ");
//     }else{
//       console.log(i);
//     }   
//   }
// }  

// var FIZZBUZZ = function(){
  
//   for(var i =1; i <= 100; i++){
//     if(i%5 === 0 && i%3 ===0){
//         console.log("BuzzFizz");
//     }else if(i%3 === 0){
//       console.log("Fizz");
//     }else if(i%5 === 0){
//       console.log("BUZZ");
//     }else{
//       console.log(i);
//     }   
//   }
// }  


// FIZZBUZZ();



