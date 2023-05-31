// DEFINING PROTOTYPE/OBJECT WITH OBJECT.CREATE

//Syntax

const myObj = Object.create();

// this create new object and also takes optional parameter of prototype which we want to link to.
// example

const myDateObj = Object.create(Date);      // this will create new object from date prototype

// Custom Prototype 👇

const myCourse = {
    title : "No title",
    id : "No id",
    author : "No author"
};

const newCourse = Object.create(myCourse);
console.log(newCourse.id);      // this will return it's prototype id as id is not present in newCourse itself

newCourse.id = "My new course id";
console.log(newCourse.id)       // this will return newCourse id as it is present in it...even if the same id is also present in it's prototype

// JS only seek method in prototype or prototype's prototype if the id is not present in the newly created object.