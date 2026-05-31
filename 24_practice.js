// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // const newNums = myNumbers.map( (num) => { return num + 10} )

// const newNums = myNumbers.map((num) => num * 10 )
//     .map((num) => num + 1)
//     .filter((num) => num > 50);
// console.log(newNums);



/////////////////////////reduce method//////////////////////////


const myNums = [1, 2, 3 ]

// const myTotal =myNums.reduce(function(acc, currval) {
//     console.log(`Accumulator: ${acc} - Current Value: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0);  

console.log(myTotal);

const shoppingCart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 },
    { item: "Headphones", price: 200 }
];
const total = shoppingCart.reduce((acc ,item) => acc + item.price, 0);
console.log(`Total price of items in the shopping cart is: ${total}`);