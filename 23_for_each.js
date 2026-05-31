// const coding = [`JavaScript`, `Python`, `Java`, `C++`, `Ruby`, `Go`];

// const values = coding.forEach(function(item) {
//     // console.log(item);
//     return item;
// });

// console.log(values); // undefined


// const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = mynumbers.filter((num) => {
//     return num > 4;
// });

// const newNumbers = [];
// myNumbers.forEach((num) => {
//     if (num > 4) {
//         newNumbers.push(num);
//     }
// });

const books = [
    {
        title: "The Great Gatsby", genre: "Fiction", year: 1925,
        edition: "First Edition"
    },
    {
        title: "To Kill a Mockingbird", genre: "Fiction", year: 1960,
        edition: "First Edition"
    },
    {
        title: "Down and Out in Paris and London", genre: 'Non-Fiction', year: 1933,
        edition: "Second Edition"
    },
    {
        title: "1984", genre: "Dystopian", year: 1949,
        edition: "Second Edition"
    },
    {
        title: "The Catcher in the Rye", genre: "Fiction", year: 1951,
        edition: "First Edition"
    },
    {
        title: "The Hobbit", genre: "Fantasy", year: 1937,
        edition: "First Edition"
    },
    {
        title: "The Lord of the Rings", genre: "Fantasy", year: 1954,
        edition: "First Edition"
    },
    {
        title: "The Alchemist", genre: "Fiction", year: 1988,
        edition: "First Edition"
    },
    {   title: "The Da Vinci Code", genre: "Thriller", year: 2003,
        edition: "First Edition"
    },
    {
        title: "The Hunger Games", genre: "Dystopian", year: 2008,
        edition: "First Edition"
    }
];

let userBooks =books.filter((bk) => bk.genre === "Fiction");

userBooks = books.filter((bk) => {
    return bk.edition === "Second Edition" && bk.year < 1940;
});
console.log(userBooks);



















