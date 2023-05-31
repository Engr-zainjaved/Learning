// HOW TO CHECK IF SOMETHING IS AN ARRAY

// we can use "instanceof" operator

currentCourse = [];
x = currentCourse instanceof Array;
console.log(x); // true

currentCourse1 = [];
x1 = currentCourse1 instanceof Object;  // returns "true" as the instance operator returns true if anything in the prototype chain is the type.
console.log(x1); // true, as Object is prototype of Array.prototype

//_______________________________________________________________________________________________________
// Object.isPrototypeof
// the "isPrototypeOf" function is called on a prototype, passing in the object to check

Array.prototype.isPrototypeOf(currentCourse);   // same functionality as "instanceOf" operator

//_______________________________________________________________________________________________________
// .isArray
// this will return "true" only if the object direct prototype is Array.prototype 

Array.isArray(currentCourse1);
// true