// const userEmail = "Pr@ince.ai"
// const userEmail = ""
const userEmail = []

// if (userEmail) {
//     console.log("User email is valid");
// }else {
//     console.log("User email is invalid");
// }


// falsy values: false, 0, "", null, undefined, NaN, 0n, -0n, BigInt(0), BigInt(-0)

// truthy values: all values that are not falsy
// "0", " ", [], {}, function(){}, true, 1, -1, 0.1, -0.1, BigInt(1), BigInt(-1) 


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish coalescing operator (??) - returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise returns the left-hand side operand.
 let val1;
//  val1 = 5 ?? 10;   
//  val1 = null ?? 10;   
//  val1 = undefined ?? 15;  
    val1 = null ?? 10 ?? 20; 

     
    console.log(val1); // Output: 5     

// ternary operator - condition ? expressionIfTrue : expressionIfFalse
const iceTeaPrice = 100;
iceTeaPrice  <= 80 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");