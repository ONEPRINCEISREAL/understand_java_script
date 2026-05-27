// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "prince";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "regular@example.com",
    fullName: {
        userFullName: {
            firstName: "prince",
            lastName: "chauhan"
        }
    },
    age: 25
};

// console.log(regularUser.fullName?.userFullName.lastName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = {obj1, obj2};
// const obj3 = {...obj1, ...obj2};
// const obj3 = Object.assign({},obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2 ,obj4);
// const obj3 = Object.assign(obj1, obj2);

// console.log(obj3);


const target = {a: 1, b: 2};
const source = {b: 4, c: 5};
const returnedTarget = Object.assign(target, source);

// console.log(target); //expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget===target); //expected output: true

const user1 = [{
    name: "prince",
    age: 23,
    location: "New York",
    email: "prince@example.com"
}, {
    name: "john",
    age: 22,
    location: "Amsterdam",
    email: "john@example.com"
},{
    name: "doe",
    age: 24,
    location: "London",
    email: "doe@example.com"
},{
    name: "smith",
    age: 21,
    location: "Paris",
    email: "smith@example.com"
}];

user1[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("IsLogged"));


const course = {
    name: "JavaScript",
    price: 999,
    courseInstructor: "prince"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course;

console.log(instructor);
// console.log(courseInstructor);.

// const navebar = ({company}) => {
// }
// navebar({company: "Google"})






































