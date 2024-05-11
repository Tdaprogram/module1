let book = {
    title: "Learning Javascipt Object Variable",
    author: "Institute of Data",
    year: 2024,
    genre: "Programming",
    pages: 15
};

console.log(book.title);
console.log(book.genre);
console.log(book.year);
console.log(book.pages);
console.log(book.author);
//Originasl Book Data
console.log(book);

///Change Title
let newTitle = book.title
newTitle = "Jason Object Variable"
book.title = newTitle
console.log(book);