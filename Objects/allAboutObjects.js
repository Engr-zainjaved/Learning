//? This File will tell you all about Objects in JavaScript + I will keep updating this files as required
//? Each New 
















//todo objects are --> container for other data types, passed by reference, link to a prototype

//! Creating Objects with Object Literals syntax


//? object have key-value pair, key/variable are not defined in " " but require in some cases if there is SPACE or HYPHEN

const myCourse = {
    "course source": "pluralsight",
    "subject-name": "javascript",
    key: 'value',
    title: "object course",
    id: "sd-02",
    author: "Zain"
}; //? need semi-colon here as this whole thing is expression

console.log(myCourse["course source"]);  //? we require [] for accessing these special types of keys
console.log(myCourse["subject-name"]);
console.log(myCourse.author);

console.log(JSON.stringify(myCourse));

//!  JSON Document
/*
{
"course source":"pluralsight", //? keys also use " " in JSON
"subject-name":"javascript",
"key":"value",
"title":"object course",
"id":"sd-02",
"author":"Zain" //? trailing comma not used at the end key-value pair
} //? semi-colon is not used 
*/

//! Another way to Creating Objects with "new" Syntax
//! all objects link to some previously defined blueprint these blueprints are called PROTOTYPES in JS

const myDate = new Date();  //? creating new instance from Data Object 
console.log(myDate.getDate());  //? I get access to this method as it is already defined in the prototype of Date Object

const myNullObject = Object.create(null); //? this object links to no prototype
console.log(myNullObject);

const myNewObject = new Object;
console.log(myNewObject);