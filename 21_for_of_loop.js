//////////////////////////////// For of loop///////////////////

["", "", ""]
[{},{},{}]

const arr =[1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello, World!";

for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
}

// Maps

const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United States of America");
myMap.set("NY", "New York");


// console.log(myMap); 

for (const [key, value] of myMap) {
    // console.log(`${key} :- ${value}`);
}




/////////////////////////// for in loop//////////////////////

const myObject = {
    js: "JavaScript",
    py: "Python",
    java: "Java",
    cpp: "C++",
    rb: "Ruby",
    go: "Go"

};

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}


const programming = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go"];

for (const index in programming) {
    console.log(`Index: ${index} - Value: ${programming[index]}`);
}

















