//let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Prince"



// console.log(typeof score); 
// console.log(typeof(score)); 

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33abc" => NaN (Not a Number)
// null => 0
// undefined => NaN
// true => 1, false => 0
// "Prince" => NaN

let isLoggedIn = "Prince"

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, " " => true
// null => false
// undefined => false
// NaN => false

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ######################Operations######################

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(3 + 3); // 6
// console.log(3 - 3); // 0
// console.log(3 * 3); // 9
// console.log(3 / 3); // 1
// console.log(3 % 2); // 1 (modulo operator gives the remainder)
// console.log(3 ** 3); // 27 (exponentiation operator, 3 to the power of 3)   

let str1 = "Hello"
let str2 = " Prince"
let str3 = str1 + str2
console.log(str3);

// console.log(3 + "3"); // "33" (string concatenation)
// console.log("3" + 3 + 3); // "333" (string concatenation)
// console.log("3" + "3"); // "33" (string concatenation) 

// console.log(3 + 3 + "3"); // "63" (first 3 + 3 is evaluated to 6, then 6 + "3" is evaluated to "63")    

// console.log((3 + 3) * 3 % 2 ); // 12 (multiplication has higher precedence than addition)
 
// console.log(true); // 1 (unary plus operator converts true to 1)
// console.log(+""); 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2; // right to left associativity, first 2 + 2 is evaluated to 4, then num3 is assigned 4, then num2 is assigned 4, then num1 is assigned 4

let gameCounter = 100
gameCounter++;  
// console.log(gameCounter); // 101


// let x=3;
// const y=x++ ;
// console.log(`x:${x}, y:${y}`); // x:4, y:3

// let a=3;
// const b=++a ;
// console.log(`a:${a}, b:${b}`); // a:4, b:4



