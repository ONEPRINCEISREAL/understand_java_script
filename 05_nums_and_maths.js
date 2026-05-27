const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // "100" (number objects have access to number methods through their prototype)
// console.log(balance.toFixed(2)); // "100.00" (number objects have access to number methods through their prototype)

const otherNumber = 123.486651
// console.log(otherNumber.toPrecision(4)); // "123.5" (number objects have access to number methods through their prototype, toPrecision formats a number to a specified length)

const hundreds = 10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN')); // "10,000,000" (formats a number using locale-specific conventions)


// // ***********************************MATHS***********************************
// console.log(Math);
// console.log(Math.PI); // 3.141592653589793 (Math is a built-in object that has properties and methods for mathematical constants and functions)
// console.log(Math.E); // 2.718281828459045 (Math is a built-in object that has properties and methods for mathematical constants and functions)
// console.log(Math.abs(-4));
// console.log(Math.round(4.7)); // 5 (Math is a built-in object that has properties and methods for mathematical constants and functions)


// console.log(Math.random()); // generates a random number between 0 (inclusive) and 1 (exclusive)
// console.log((Math.random()*10) + 1); // generates a random number between 1 (inclusive) and 11 (exclusive)
// console.log(Math.floor((Math.random()*10) + 1)); // generates a random integer between 1 (inclusive) and 10 (inclusiv)


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates a random integer between min (inclusive) and max (exclusive)