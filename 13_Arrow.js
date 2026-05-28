const user = {
    username: "Prince",
    price: 1000,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} ,to our website!`);
        // console.log(this);
    }

};

// user.welcomeMessage();
// user.username = "rohan";
// user.welcomeMessage();

// console.log(this);


// function thisss() {
//     let username = "Prince"
//     // console.log(username);
//     console.log(this.username);
// }

// thisss();

// const thisss = function() {
//     let username = "Prince"
//     console.log(this.username);
// }
// thisss();

// const arrow = () => {
//     let username = "Prince"
//     console.log(this.username);
// }
// arrow();

// const addTow = (num1, num2) => {
//     return num1 + num2;
// }

// const addTow = (num1, num2) => num1 + num2

// const addTow = (num1, num2) => (num1 + num2)

const addTow = (num1, num2) => ({username:"prince"})


console.log(addTow(5, 10))

const myArray = [1, 2, 3, 4, 5]

