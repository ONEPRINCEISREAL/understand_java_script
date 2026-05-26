"use strict"; // treat all JS code as newer version 

// alert ( 3 + 3 ) // we are using node.js, not browser, so we will use console.log instead of alert

console.log(3 + 3);

console.log("Prince of JavaScript");

let name = "Prince of JavaScript";
let age = 25;
let isStudent = true;

// Number =>  2 to power 53 
// bigint
// string => ""
// boolean => true or false
// null => intentional absence of any value
// undefined => variable declared but no value assigned
// symbol => unique identifier

// object => collection of properties and methods
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol