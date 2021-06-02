console.log('hello');

// alert('hello this is yugansh');

// How to write a comment inline

// variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hey There';

// var age = prompt('What is your age?');
document.write('')

// Numbers in javascript
var num1 = 10;

// Increment num1 by 1
num1++

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, Multiply *, remainder %
console.log(num1 / 6);

// Increment/decrement by 10
num1 += 20;
console.log(num1);

/* Functions
1.Create a function
2.Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Create
fun();

/*
Let's create a function that take in a name and says 
hello followed by your name

For example

Name: "yugansh"
return: "Hello yugansh"
*/

function greeting(yourName) {
    var result = 'hello' + ' ' + yourName;
    console.log(result);
}

// var name = prompt('What is your name?');
greeting(name);

// How do arguments work is function?
// How do we add 2 numbers together in a function?

function sumNumbers(num1 , num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while(num < 100){
    num += 1;
    console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types
let yourAge = 18;                               // number
let yourName = 'Bob';                           // string
let first = {first: 'Jane', last: 'Doe'};       //object
let truth = false                               // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                     // undefined
let nothing = null;                             // value null

// string in javascript {common methids}
let fruit = 'banana';
let morefruits = 'banana/apple';

// Array
let fruits = ['banana','apple','orange','pineapples'];
 fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);  // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);  // removes last item
console.log(fruits.push('blackberries'), fruits);  // appends
console.log(fruits[4]);
fruits[fruits,length] = 'new fruit'; // same as push
console.log(fruits)
fruits.shift(); // remove first element from a list from an array
console.log(fruits)
fruits.unshift('Kivi'); // add first element from a list from an array
console.log(fruits)

let  vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruit.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());