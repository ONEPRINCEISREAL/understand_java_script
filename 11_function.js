// console.log("P");
// console.log("R");
// console.log("I");
// console.log("N");
// console.log("C");
// console.log("E");


function printPrince() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}
// printPrince();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2) {

    return num1 + num2;

    // let result = num1 + num2;
    // return result;
}
// const result = addTwoNumbers(5, 9);
// console.log("Result:", result);


function loginUser(username , password) {
    if (!username || !password) {
        return "Username and password are required.";
    }
    return `${username} has logged in with password ${password}`;
}

// console.log(loginUser("Prince", "12345"));//////////////
// console.log(loginUser());

function calculateCartTotal(val1,val2,...cart) {
    return cart
}
// console.log(calculateCartTotal(200, 300, 400, 500, 600));

const user = {
    name: "Prince",
    price: 1000,
    email: "prince@example.com"
};

function handleUser(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price} `)
}

// handleUser(user)
// handleUser({
//     name: "prince",
//     price: 399,
// })

const myNewArray = [1, 2, 3, 4, 5];

function prinntsecondElement(arr) {
    return arr[1];
}

// console.log(prinntsecondElement(myNewArray));
console.log(prinntsecondElement([10, 20, 30, 40, 50]));
