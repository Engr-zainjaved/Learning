// FUNCTIONS FOR COMBINING ARRAYS

array1 = [1,3,4];
array2 = [5,6,7];

// concat function
const x = array1.concat(array2);
console.log(x);
// spread operator
const y = [...array1,...array2];
console.log(y);