//singleton
Object.create

// object literals


const mySym = Symbol("key1"); 


const user = {
    name: "prince",
    "Full Name": "Prince Singh Chauhan",
    [mySym]: "mykey1",
    age: 23,
    work: "DevOps Engineer",
    location: "New York",
    email: "prince@example.com",
    isLoggedIn: false,
    lastLogin: ["monday", "tuesday", "wednesday"],

    
}


// console.log(user.email);
// console.log(user["email"]);
// console.log(user["Full Name"]);
// console.log(user["Full Name"]);
// console.log(user[mySym])

// user.email = "newemail@example.com";
// console.log(user.email);
// // Object.freeze(user); // freezes the object (prevents any modifications to the object, including adding, deleting, or changing properties)
// user.email = "anotheremail@example.com";
// console.log(user.email);

// console.log(user);


user.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

user.greeting2 = function() {
    console.log(`Hii, my friend,I am: ${this.work} and I am ${this.age} years old.`);
}

// console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting2());


