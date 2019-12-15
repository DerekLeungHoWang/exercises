# JavaScript methods

## String methods

### .length
~~~~

const string = "Hello World";

String.prototype.length Reflects the length of the string.

console.log(string.length) // => 11

~~~~

### .charAt()
~~~~

const string = "Hello World";

String.prototype.charAt() Returns the character (exactly one UTF-16 code unit) at the specified index.

console.log(string.charAt(1)) // => "e"

~~~~

### .chatCodeAt()

~~~~

const string = "Hello World";

String.prototype.charCodeAt() Returns a number that is the UTF-16 code unit value at the given index.

console.log(string.charCodeAt(5)) // => 32

~~~~

### .concat()

~~~~

const string1 = "Hello";
const string2 = "World";

String.prototype.concat() Combines the text of two strings and returns a new string.

const combinedString = string1.concat(string2);
console.log(combinedString) //=> "HelloWorld";

~~~~

### .includes()

~~~~

const string = "Hello World";

String.prototype.includes() Determines whether one string may be found within another string.

console.log(string.includes('ello')); // => true
console.log(string.includes('no')); // => false

~~~~

#### .endsWith()

~~~~

const string = "Hello World";

String.prototype.endsWith() Determines whether a string ends with the characters of another string.

console.log(string.endsWith('World')); // => true
console.log(string.endsWith('bingo')); // => false

~~~~

### .indexOf()

~~~~

const string = 'Hello World';

String.prototype.indexOf() Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

console.log(string.indexOf('W')); // => 6
console.log(string.indexOf('A')); // => -1

~~~~

### .repeat()

~~~~

const string = "Hello World";

String.prototype.repeat()Returns a string consisting of the elements of the object repeated the given times.

console.log(string.repeat(2)); // => "Hello WorldHello World"

~~~~

### .replace()

~~~~

const string = "There were red windows and a red door at the building named Red Mansion";

String.prototype.replace()Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

Replace based on a particular string;
const newString = string.replace("building", "Estate");
console.log(newString); // => "There were red windows and a red door at the Estate named Red Mansion"

Replace based on global replacement - regular expression
const newString1 = string.replace(/red/g, "blue");
console.log(newString1); // => "There were blue windows and a blue door at the building named Red Mansion"

Replace based on global case-insensitive - regular expression 
const newString2 = string.replace(/red/gi, "blue");
console.log(newString2); // => "There were blue windows and a blue door at the building named blue Mansion"

~~~~

### .search()

~~~~

const string = "The quick fox jumps over the brown lazy dog."

String.prototype.search()Executes the search for a match between a regular expression and a specified string.

Search by case sensitive string
console.log(string.search("the")); // => 25

Search by regular expression (case insensitive)
console.log(string.search(/the/i)); // => 0

~~~~

### .slice()

~~~~

const string = "All the kings horses and all the kings men, could not put Humpty Dumpty back together again."

String.prototype.slice()Extracts a section of a string and returns a new string.

console.log(string.slice(0, 42)); // => "All the kings horses and all the kings men"

~~~~

### .split()

~~~~

const string = "Hello World";

String.prototype.split()Splits a String object into an array of strings by separating the string into substrings.

console.log(string.split(" ")) // => [ 'Hello', 'World']

console.log(string.split("")) // => [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

~~~~

### .toLowerCase()

~~~~

const string = "Hello World";

String.prototype.toLowerCase()Returns the calling string value converted to lower case.

console.log(string.toLowerCase()); // => hello world

~~~~

### .toUpperCase()

~~~~

const = string = "Hello World";

String.prototype.toUpperCase()Returns the calling string value converted to uppercase.

console.log(string.toUpperCase()); // => HELLO WORLD 


~~~~

### .trim()

~~~~

const string = "  Hello World  ";

String.prototype.trim()Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

console.log(string.trim());

~~~~

### toString()

~~~~

const value = 420;

String.prototype.toString()Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

console.log(value.toString()); // => "420"

~~~~

### .valueOf()

~~~~

const string = "Hello World";
const number = 420;

String.prototype.valueOf()Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

console.log(string.valueOf()); // => "Hello World"
console.log(number.valueOf()); // => 420

~~~~

## Number Methods

### .isNaN()

~~~~

const string = "This is a string."

const number = 42

Number.isNaN() Determine whether the passed value is NaN.

console.log(isNaN(string)); // => true;
console.log(isNaN(number)); // => false;

~~~~

### .isFinite()

~~~~

const number = 21;
const pi = Math.PI
const somethingBig = Infinity

Number.isFinite() Determine whether the passed value is a finite number.

console.log(isFinite(number)); // => true;
console.log(isFinite(pi)); // => true;
console.log(isFinite(somethingBig)); // => false;

~~~~

### isInteger()

~~~~

const number = 21;
const pi = Math.PI;

Number.isInteger() Determine whether the passed value is an integer.

console.log(Number.isInteger(pi)); // => false;
console.log(Number.isInteger(number)); //=> true;

~~~~

### .parseFloat() ###

~~~~

const number = 42;
const string = "This is a string";
const numberString = "42";

Number.parseFloat()The value is the same as parseFloat() of the global object.

console.log(parseFloat(number)); // => 42
console.log(parseFloat(string)); // => NaN
console.log(parseFloat(numberString)); // => 42

~~~~

### .parseInt() ###

~~~~

const number = 42;
const string = "This is a string";
const numberString = "42";

Number.parseInt()The value is the same as parseInt() of the global object. The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.

console.log(parseFloat(number)); // => 42
console.log(parseFloat(string)); // => NaN
console.log(parseFloat(numberString)); // => 42

~~~~

### .toExponential() 

~~~~

const smallNumber = 2
const largeNumber = 2000000
const giantNumber = 20000000000
const complicatedGiantNumber = 977825675183

Number.prototype.toExponential() Returns a string representing the number in exponential notation. - numObj.toExponential([fractionDigits]) fractionDigits
Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

console.log(smallNumber.toExponential()); // => 2e+0
console.log(largeNumber.toExponential()); // => 2e+6
console.log(giantNumber.toExponential()); // => 2e+10
console.log(complicatedGiantNumber.toExponential()); // => 9.77825675183e+11 
console.log(complicatedGiantNumber.toExponential(2)); // => 9.78e+11

~~~~


### .toFixed()

~~~~

const pi = 3.14159265359

Number.prototype.toFixed() Returns a string representing the number in fixed-point notation.

console.log(pi.toFixed()); // => 3
console.log(pi.toFixed(2)); // => 3.14
console.log(pi.toFixed(6)); // => 3.141593
console.log(pi.toFixed(10)); // => 3.1415926536

~~~~

### .toLocaleString()
This method can only be used from the google chrome development console - needs access to the languages?

~~~~

const number = 999999
const decimalNumber = 3.141592654

Number.prototype.toLocaleString()Returns a string with a language sensitive representation of this number. Overrides the Object.prototype.toLocaleString() method. numObj.toLocaleString([locales [, options]])

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // => 九九九九九九
console.log(decimalNumber.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // => 三.一四二

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE')); // => 999.999
console.log(decimalNumber.toLocaleString('de-DE')); // => 3,142

~~~~

### .toString()

~~~~

const number = 42.45
const integer = 7

Number.prototype.toString()Returns a string representing the specified object in the specified radix (base). Overrides the Object.prototype.toString() method. numObj.toString([radix]) - radix Optional. An integer in the range 2 through 36 specifying the base to use for representing numeric values.

basic usage

console.log(number.toString()); // => '42.45'
console.log(integer.toString()); // => '7'

advanced usage

const x = 6;

console.log(x.toString(2)); // => '110'
console.log((254).toString(16)) // => 'fe'

~~~~

### .valueOf()

~~~~

const number = 21;
const numberObject = new Number (99);
const num = numberObject.valueOf();


Number.prototype.valueOf()Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

console.log(number.valueOf()); // => 21
console.log(numberObject.valueOf()); // => 99
console.log(num); // => 99
console.log(typeof num); // => number
console.log(typeof numberObject); // => object

~~~~

## Array Methods 

### .filter()

~~~~

const array = ['One', 'Symbol', 'Dictionary', 'Microscope', 'Tan']

.filter() = Creates a new array based on whether the items of an array pass a certain condition.

console.log(array.filter(e => e.length > 6)); // => ['Dictionary', 'Microscope']
console.log(array.filter(e => e === 'One')); // => ['One']

~~~~

### .map()

~~~~
const array = [{title: 'Lord', fName: 'John', lName: 'Snow'}, {title: 'Ser', fName: 'Jamie', lName: 'Lannister'}, {title: 'King', fName: 'Geoffery', lName: 'Baratheon'}, {title: 'Ser', fName: 'Brianne', lName: 'Tarth'}]

const numberArray = [ 3, 6, 9, 12, 63]

.map() = Creates a new array by manipulating the values in another array. Great for data manipulation and it is often used in React because it is an immutable method.

console.log(array.map(element => {
    return `${element.title} ${fName} ${lName} was a character in the popular Tv series Game of Thrones`
})); // => ["Lord John Snow were characters in game of thrones", "Ser Jamie Lannister were characters in game of thrones", "King Geoffery Baratheon were characters in game of thrones", "Ser Brianne Tarth were characters in game of thrones"]

console.log(numberArray.map(element => {
    return (element * element) - element;
})); // => [6, 30, 72, 132, 3906]

~~~~

### .reduce()



~~~~

const numberArray = [ 12, 15, 78, 92, 20];

const wordArray = [ "Once", "upon", "a", "time"]

.reduce() = This often overlooked method uses an accumulator to reduce all items in an array to a single value. Great for calculating totals. The returned value can be of any type (i.e. object, array, string, integer). 

arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])

callback
A function to execute on each element in the array (except for the first, if no initialValue is supplied), taking four arguments:
accumulator
The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
currentValue
The current element being processed in the array.
index Optional
The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, starts from index 1.
array Optional
The array reduce() was called upon.
initialValue Optional
A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initialValue will throw a TypeError.

Return value
The single value that results from the reduction.

console.log(numberArray.reduce(function(acc, cv){
  return acc+cv
},0)); // => 217

AS a function
const reducer = (acc, cv) => acc + cv;
console.log(numberArray.reduce(reducer)); // => 217

console.log(wordArray.reduce(function(acc,cv){
  return (acc + ' ' + cv)
},'')); // => "Once upon a time"

~~~~

### .forEach()

~~~~

const numberArray = [ 1 , 2 , 3 , 4 , 5 ]
const wordArray = [ "Little", "Red", "Riding", "Hood"]

.forEach() = Applies a function on each item in an array.

console.log(numberArray.forEach(function(element){
    console.log( element + 5);
})); // => 
            6
            7
            8
            9
            10
console.log(wordArray.forEach(function(element){
    console.log(element + ' ' +'additional string')
})); // =>
            "Little additional string"
            "Red additional string"
            "Riding additional string"
            "Hood additional string"

~~~~

### .some()

~~~~

const users = [ 'Tim', 'Bob', 'John' ];

const numbers = [ 1 , 2 , 3 , 4 , 5 ];

.some() = Checks if any item in an array passes the condition. A good use case would be checking for user privileges. It can also be used similarly to a .forEach()where you would perform an action on each array item and break out of the loop once a truthy value is returned. arr.some(callback(element[, index[, array]])[, thisArg])
callback
A function to test for each element, taking three arguments:
element
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
arrayOptional
The array some() was called upon.
thisArgOptional
A value to use as this when executing callback.

console.log(numbers.some(function(element){
  return element % 2 === 0;
})); // => true

console.log(numbers.some(function(element){
  return element > 10;
})); // => false

console.log(users.some(function(element){
  return element === 'Bob';
})); // => true

console.log(users.some(function(element){
  return element === 'Bill';
})); // => false

~~~~

### .every()

~~~~

const users = [ 'Tim', 'Bob', 'John' ];

const numbers = [ 1 , 2 , 3 , 4 , 5 ];

.every() = Similar to .some(), but checks if all items in an array pass a condition. It returns a Boolean value. 

console.log(users.every(function(element){
  return element.length > 2;
})); // => true

console.log(numbers.every(function(element){
  return element % 2 === 0;
})); // => false

console.log(numbers.every(function(element){
  return element  < 10;
})); // => true

callback way
function isBelow10(currentValue) {
    return currentValue < 10;
}

console.log(numbers.every(isBelow10)); // => true

~~~~

### .includes()

~~~~

const shoppingList = [ 'Beef', 'Tomatoes', 'IceCream', 'Apples', 'Cherries', 'Grapes' ];

.includes() = Checks if an array contains a certain value. It’s similar to .some(),but instead of looking for a condition to pass, it looks if the array contains a specific value. Passes a boolean

console.log(shoppingList.includes('Cream')); // => False;
console.log(shoppingList.includes('Beef')); // => true;
console.log(shoppingList.includes('Ginger')); // => false;

~~~~

### .pop()

~~~~

const chickenArray = [ 'Chicken Feet', 'Chicken Legs', 'Chicken Thigh', 'Chicken Breast', 'Chicken Wing'];

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(chickenArray.pop()); // => 'Chicken Wing'

console.log(chickenArray); // => [ 'Chicken Feet', 'Chicken Legs', 'Chicken Thigh', 'Chicken Breast' ]

chickenArray.pop();

console.log(chickenArray); // => [ 'Chicken Feet', 'Chicken Legs', 'Chicken Thigh' ]

~~~~

### .push()

~~~~

const colours = [ 'black', 'blue', 'red', 'pink' ]

The push() method adds one or more elements to the end of an array and returns the new length of the array.

console.log(colours.push('violet')); // => 5

console.log(colours); // => [ 'black', 'blue', 'red', 'pink', 'violet' ]

~~~~

### .shift()

~~~~

const clothes = [ 'jeans', 'shirt', 'shoes', 'socks']

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

console.log(clothes.shift()); // => 'jeans'
console.log(clothes); // => [ 'shirt', 'shoes', 'socks']
clothes.shift();
console.log(clothes); // => [ 'shoes', 'socks']

~~~~

### .unshift()

~~~~

const fridgeLeftovers = [ 'Fried Chicken', 'Congee', 'Boiled Eggs']

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

console.log(fridgeLeftovers.unshift('Apple pie')); // => 4

console.log(fridgeLeftovers); // => [ 'Apple pie', 'Fried Chicken', 'Congee', 'Boiled Eggs']

fridgeLeftovers.unshift('Half eaten steak'); 

console.log(fridgeLeftovers); // => [ 'Half eaten steak', 'Apple pie', 'Fried Chicken', 'Congee', 'Boiled Eggs']

~~~~


### .splice()

~~~~

const chineseZodiacOrder = [ 'Rat', 'Ox', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig' ]

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// adding items into an array
chineseZodiacOrder.splice(2, 0, 'Tiger');

console.log(chineseZodiacOrder); // => 
['Rat',
  'Ox',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Sheep',
  'Monkey',
  'Rooster',
  'Dog',
  'Pig' ]

// remove items from an array
console.log(chineseZodiacOrder.splice(0,5)); // => [ 'Rat', 'Ox', 'Rabbit', 'Dragon', 'Snake' ]

console.log(chineseZodiacOrder); // => [ 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig' ]

~~~~

## Object Methods

Object.values() = Return an array of the values of an object.

Object.keys() = Return an array of the keys of an object.

Object.entries() = Creates an array which contains arrays of key/value pairs of an object.

Array spread = Spreading arrays using the spread operator (…) allows you to expand the elements in an array. It’s useful when concatenating a bunch of arrays together. It’s also a good way to avoid using the splice() method when looking to remove certain elements from an array because it can be combined with the slice() method to prevent direct mutation of an array.
Combine two arrays.
const spreadableOne = [1, 2, 3, 4];const spreadableTwo = [5, 6, 7, 8];const combined = [...spreadableOne, ...spreadableTwo];// combined will be equal to [1, 2, 3, 4, 5, 6, 7, 8]

Remove an array element without mutating the original array.
const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];const mammals = [...animals.slice(0,3), ...animals.slice(4)];// mammals will be equal to ['squirrel', 'bear', 'deer', 'rat']

Object spread = Spreading an object allows for the addition of new properties and values to an object without mutations (i.e. a new object is created) and it can also be used to combine multiple objects together. It should be noted that spreading objects does not do nested copying.
Example
Add a new object property and value without mutating the original object.
const spreadableObject = {name: 'Robert',phone: 'iPhone'};const newObject = {...spreadableObject,carModel: 'Volkswagen'}// newObject will be equal to// { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }

Function Rest = Functions can use the rest parameter syntax to accept any number of arguments as an array.

Example
Display the array of passed arguments.
function displayArgumentsArray(...theArguments) {console.log(theArguments);}displayArgumentsArray('hi', 'there', 'bud');// Will print ['hi', 'there', 'bud']

Object.freeze() = Prevents you from modifying existing object properties or adding new properties and values to an object. It’s often what people think const does, however const allows you to modify an object.

Example
Freeze an object to prevent the name property from being changed.
const frozenObject = {name: 'Robert'}Object.freeze(frozenObject);frozenObject.name = 'Henry';// frozenObject will be equal to { name: 'Robert' }

Object.seal() = Stops any new properties from being added to an object, but still allows for existing properties to be changed.
Example
Seal an object to prevent the wearsWatch property from being added.
const sealedObject = {name: 'Robert'}Object.seal(sealedObject);sealedObject.name = 'Bob';sealedObject.wearsWatch = true;// sealedObject will be equal to { name: 'Bob' }

Object.assign() = Allows for objects to be combined together. This method is not really needed because you can use the object spread syntax instead. Like the object spread operator, Object.assign() does not do deep cloning. Lodash is your best friend when it comes to deep cloning objects.
Example
Combine two objects into one.
const firstObject = {firstName: 'Robert'}const secondObject = {lastName: 'Cooper'}const combinedObject = Object.assign(firstObject, secondObject);// combinedObject will be equal to { firstName: 'Robert', lastName: 'Cooper' }




