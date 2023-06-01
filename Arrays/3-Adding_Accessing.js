const arr = [1,2,3,4,5,6,7,8,9,10];

arr.push('new element');        // adds new element at the end of array
console.log(arr);

arr.pop();                      // remove element from the end of array
console.log(arr);

arr.shift()                     // remove element from start of the array
console.log('After removing first element using shift method',arr);

arr.unshift('22')               // add element at the start of array
console.log(arr);