const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

const dcHeroes = ["Superman", "Batman", "Wonder Woman"];

// marvelHeroes.push(dcHeroes); // adds the dcHeroes array as an element to the end of the marvelHeroes array
// console.log(marvelHeroes);
// // console.log(dcHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes); 
// console.log(allHeroes);

const all_newHeroes = [...marvelHeroes, ...dcHeroes]; // spread operator (allows us to spread the elements of an array into another array)

// console.log(all_newHeroes);


const anotherArray = [ 1, 2, [3, 4, 5, 6], 7,[ 8, 9,[4, 10]] ];

const real_anotherArray = anotherArray.flat(Infinity); // flat method (flattens an array up to the specified depth, Infinity flattens all levels of nested arrays)

console.log(real_anotherArray);

console.log(Array.isArray("prince")); 
console.log(Array.from("prince")); 
console.log(Array.from({name: "prince"})); // Array.from creates a new array from an array-like or iterable object. In this case, it creates an array of the characters in the string "prince" and an empty array for the object {name: "prince"} since it is not iterable.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Array.of creates a new array from the arguments passed to it. In this case, it creates an array with a single element which is the value of score (300).











