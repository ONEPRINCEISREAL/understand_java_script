// // for loop
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element % 2 === 0) {
//         // console.log(`${element} is even`);
//     }
//     // console.log(element);
// }


// console.log(element); // ReferenceError: element is not defined


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of : ${i} `);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + ' = ' + i*j);
//         // console.log(`Inner loop value: ${j} and Inner loop value: ${i}`);
//     }
// }

let myArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// console.log(myArray.length); // Output: 5
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//brake and continue
for (let i = 1; i <= 10; i++) {
  
    if (i === 5) {
        console.log(`value is detected = ${i}`);
        break; // exit the loop when i is 5
        // continue; // skip the rest of the loop when i is 5 and continue with the next iteration
    }
    console.log(`Value of i is = ${i}`);
}





