// function greet(callback) {
//     console.log('Hello');
//     callback();
// }

// greet(function(){
//     console.log("I'm the callback");
// });
// var myArray = [4, 8, 2, 7, 5];
var myArray = [7, 8, 9, 1, 2];
let result = [];
function processArray(arr,callback){
for(let i = 0;i< arr.length; i++){
    let a = myArray[i]
    result.push(callback(a))  
}
}
// processArray(myArray, function(a) {
//     console.log(a * 2);
// });
processArray(myArray, function (a) {
   return (a + 5); 
});

console.log(result);