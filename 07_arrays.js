// array
// const devopsTools = ["docker", "kubernetes", "jenkins", "ansible", "terraform"]; // array (which is a type of object)


const myArray = new Array("docker", "kubernetes", "jenkins", "ansible", "terraform");

// myArray.push("aws"); // adds an element to the end of the array
// console.log(myArray);
// myArray.unshift("azure"); // adds an element to the beginning of the array
// console.log(myArray);
// myArray.pop(); // removes the last element of the array
// console.log(myArray);
// myArray.shift(); // removes the first element of the array
// console.log(myArray);


// console.log(myArray.includes(9));
// console.log(myArray.indexOf("jenkins")); // 2 (returns the index of the first occurrence of the specified element, or -1 if it is not found)

// console.log(myArray.indexOf(2)); // -1 (returns the index of the first occurrence of the specified element, or -1 if it is not found)

// console.log(myArray.length); // 5 (arrays have a length property which returns the number of elements in the array)

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); 
// console.log(typeof newArray); // string (join returns a string by concatenating all the elements of the array, separated by commas by default)


//slice, splice, concat, reverse, sort, map, filter, reduce, forEach, etc are some of the most commonly used array methods in JavaScript.

// console.log("A ", myArray);

// const mynewArray = myArray.slice(1, 4);
// console.log(mynewArray);
// console.log("B ", myArray); // slice does not modify the original array, it returns a new array containing the selected elements


const mynewArray2 = myArray.splice(1, 2, ); 
console.log(mynewArray2); 





