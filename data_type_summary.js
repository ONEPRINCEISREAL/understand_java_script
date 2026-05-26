// primitive data types

// 7 types :String, Number, Boolean, Undefined, Null, Symbol, BigInt of primitive data types in JavaScript

const score = 100 // number
const scoreValue = 100.34 // number

let userName; // undefined
const isLoggedIn = false; // boolean
const outsidetemp = null; // null
const uniqueId = Symbol('id'); // symbol
const uniqueId2 = Symbol('id'); // symbol (unique even with same description)
const largeNumber = 123456789012345678901234567890n; // bigint/

// console.log(uniqueId === uniqueId2); // false (symbols are unique)


//reference data types(non-primitive data types)

// 1. Object 2. Array 3. Function

const devopsTools = ["docker", "kubernetes", "jenkins", "ansible", "terraform"]; // array (which is a type of object)

const person =  {
    name: "Prince", // object
    age: 25,
    isStudent: true
}


const myfuntion = function(){
    console.log("This is a function");
}

console.log(typeof devopsTools); // object
console.log(typeof person); // object
console.log(typeof myfuntion); // function (functions are a special type of object in JavaScript)
console.log(typeof largeNumber); // object (this is a known bug in JavaScript)

