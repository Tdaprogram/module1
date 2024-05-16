let languages = ["Gujarati", "Hindi", "English", "French", "spanish"];
console.log(languages);

// Replace value of element 1 and 4
languages[0] = "Maori";
languages[3] = "Samoan";
console.log(languages);

//Add element at the end of the array.
languages.push("Italian");
console.log(languages);

// remove last Element
languages.pop();

//reprint original Array
console.log(languages);
for (let i=0; i<=languages.length-1;i++){
    console.log(languages[i]);
}
