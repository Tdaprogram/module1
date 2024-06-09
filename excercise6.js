let book = {
  title: "Learning Javascipt Object Variable",
  author: "Institute of Data",
  year: 2024,
  genre: "Programming",
  pages: 15,
};
console.log("");
console.log("*****  Book Array Contents  *****");
console.log("");
console.log(book.title);
console.log(book.genre);
console.log(book.year);
console.log(book.pages);
console.log(book.author);
console.log("");

    console.log("*****  With Original Description  *****");
console.log(book);
console.log("");
console.log("*****  With Changed Description  *****");
let newTitle = book.title;
newTitle = "Jason Object Variable";
book.title = newTitle;
console.log(book);
