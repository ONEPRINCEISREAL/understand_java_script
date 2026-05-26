const name = "prince";
const repoCount = 32;

// console.log(name + repoCount); // don't do this, it can lead to unexpected results due to type coercion (string concatenation instead of addition)

// to avoid this, we can use template literals (backticks) which allow us to embed expressions inside string literals
// console.log(`My name is ${name} and I have ${repoCount} repositories`); // My name is prince and I have 32 repositories


const gameName = new String(`Prince_of_Persia `); // string object (not a primitive string)


// console.log(gameName[6]); // [String: "P"] (string objects are array-like, but they are not primitive strings)
// console.log(gameName.length); // 16 (string objects have a length property)
// console.log(gameName.__proto__); // String { [String: "Prince_of_Persia"], length: 16, ... } (string objects have a prototype which is String.prototype)
// console.log(gameName.__proto__.__proto__); // Object { ... } (String.prototype is an object)
// console.log(gameName.toUpperCase()); // "PRINCE_OF_PERSIA" (string objects have access to string methods through their prototype)


// console.log(gameName.charAt(0)); // "P" (string objects have access to string methods through their prototype)
// console.log(gameName.indexOf("i")); // 2 (string objects have access to string methods through their prototype)



const NewGameName = gameName.substring(0, 6); // "Prince" (string objects have access to string methods through their prototype)
console.log(NewGameName);


const anotherString= gameName.slice(-14,8); //ince_o (string objects have access to string methods through their prototype, slice can take negative indices which count from the end of the string)
console.log(anotherString);

console.log(NewGameName.trim()); // removes whitespace from both ends of the string (string objects have access to string methods through their prototype)


console.log(gameName.split(`_`)); // splits the string into an array of substrings based on the specified delimiter (string objects have access to string methods through their prototype)