// Date

// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.getFullYear());
// console.log(typeof mydate); // object (dates are objects in JavaScript)


// let myCreatedDate = new Date(2026,6, 30, 12, 30, 0); 
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("June 30, 2026 12:30:00");
// console.log(myCreatedDate.getTime());

// let mytimeStamp = Date.now(); 
// console.log(mytimeStamp); 

// console.log(Math.floor(Date.now() / 1000)); 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());



newDate.toLocaleString('default', { month: 'long' }); 