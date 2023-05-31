// 1- We can create array from it's prototype using "new Array ()" array constructor function
// Syntax
const myArray = new Array (); // data passed into the array constructor function affects the Array that is created
// [] 

const myNewArray = new Array ({},{},{});
// [{},{},{}]

const oneNumberArray = new Array (4);   // if you pass only one parameter to constructor function
// [ , , , ]                            // this will create array of 4 blank spots in the new array at the start, but we can extext as we wish/proceed

//______________________________________________________________________________

// 2- We can also create array using "array literal syntax" []
const literalArray = [];

//______________________________________________________________________________

// 3- Create array using "Object.create" just by passing Array.prototype in it

const objectCreateArray = Object.create(Array.prototype);

//______________________________________________________________________________

// 4- "Array.of" method

const arrayOfMethod = Array.of();
// []
const arrayOfMethod1 = Array.of(2,3,5);
// [2,3,5]
const arrayOfMethod2 = Array.of(2);
// [2]

//______________________________________________________________________________
// 5- Array.from()

// Syntax
const arrayFromMethod = Array.from(arrayLikeObject);    // array-like object which is iterable, but does not link to Array.prototype

const myString = "Java";
const stringArray = Array.from(myString);
// ["J","a","v","a"]