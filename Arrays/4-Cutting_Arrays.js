// Slice: takes 2 argument(both are optional) from where to start , and where to finish and return that part

// Syntax
// arr.slice(startIndex, endIndex);

const arr = [1,2,3,4,5,6];

const x = arr.slice(1,4);       // returns new cutted array and does not effect the original array
console.log(x);
console.log(arr);               // the original array remains same

const z = arr.slice(1,-1);      // here end index starts counting backwards from the end
console.log('the negative end index value', z);

//____________________________________________________________________________________

// Splice: means to unite, (it first slice and then unite, and also insert)
// it use on a singular array

const arrayToBeChanged = [1,2,3,4,5,6,7,8,9];

// Syntax
// arrayToBeChanged.splice(startIndex, cutAmount, itemstoAdd?) 

const removed =  arrayToBeChanged.splice(2,1,"new");      // will start to cut from index 2 and will cut upto 1 element, and add "new" at index 2
// and this 👆 returned removed elements from an array.

console.log('removed elements',removed);                        // return removed element of array
console.log('original array to be changed', arrayToBeChanged);  // original array changed




const fruits = [1,2,3,4,5,6];

fruits.splice(2, 3, "Lemon", "Kiwi");  // start from index "2" and delete next "3" elements and add ("Lemon", "Kiwi") at index "2"

console.log(fruits);        // the original array now changed

console.log(fruits);
console.log(fruits.length);

delete fruits[2];           // this will make the "black slot" at index 2 (not recommended way to delete item)
delete fruits               // this will delete the entrie array;

console.log(fruits);
//____________________________________________________________________________________________________________

// SPLICE - edits the original array

// if we want to use SPLICE but don't want to edit the original array...we can use
// ".toSpliced" method