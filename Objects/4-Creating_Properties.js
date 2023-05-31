
// here we created a object/prototype using object literal
const contentBlockPrototype = {
    id : "no id",
    title : "no title",
    description : "no description"
};

// here we created a new object "contentBlock1" using our prototype "contentBlockPrototype"
const contentBlock1 = Object.create(contentBlockPrototype);         // currently "contentBlock1" is empty itself

// we can add properties to contentBlock1 using "." dot notation and also by "[]" bracket notation

contentBlock1.description = "new description";                      // Dot Notation
contentBlock1["second description"] = "second new description"      // Bracket Notation

console.log(contentBlock1);