// Immediately Invoked Function Expression (IIFE)
(function one(){
    console.log("This is an IIFE");
})();

((name) => {
    console.log(`This is an IIFE ${name}`);
})("Alice");

(function two(){
    console.log("This is an IIFE");
})();
