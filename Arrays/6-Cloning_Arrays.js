// SHALLOW COPY

const arrOriginal = [1,2,3,4,5,6];

const shallowCopy = [...arrOriginal];

shallowCopy.unshift('new element');

console.log('shallow copy', shallowCopy);
console.log('original array', arrOriginal);

//DEEP COPY
const deepOriginalArray = [2,3,4,5,[23,43,54,34],2,2];

const deepCopyArray = JSON.parse(JSON.stringify(deepOriginalArray));

deepCopyArray[4][2] = 'new element';

console.log(deepCopyArray);
console.log(deepOriginalArray);

// but by using JSON method the iner-array losses its reference to it's prototype which is available in 'deepOriginalArray'

// the only prototype the deep copy link to is Object.prototype