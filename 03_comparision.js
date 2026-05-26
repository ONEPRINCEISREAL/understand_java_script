// console.log (2>1); // true
// console.log (2<1); // false
// console.log (2>=2);; // true
// console.log (2<=1); // false
// console.log (2!=1); // true
// console.log (2==2); // true
// console.log (2=="2"); // true (loose equality operator, performs type coercion)
// console.log (2===2); // true (strict equality operator, does not perform type coercion)
// console.log (2==="2"); // false (strict equality operator, does not perform type coercion)

// console.log("2">1); // true (string "2" is converted to number 2, then compared with 1)
// console.log("02">1); // true (string "02" is converted to number 2, then compared with 1)


console.log(null>0); // false (null is converted to 0, then compared with 0)
console.log(null==0); // false (null is only equal to undefined, not to any other value)
console.log(null>=0); // true (null is converted to 0, then compared with 0)

console.log(undefined>0); // false (undefined is converted to NaN, then compared with 0)
console.log(undefined==null); // true (undefined is only equal to null, not to any other value)
console.log(undefined>=0); // false (undefined is converted to NaN, then compared with 0)


