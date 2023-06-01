// reverse function
//Syntax

const arr = [1,3,4,5,6];
const reversedArray = arr.reverse();
console.log(reversedArray);
console.log(arr);                       // the original array also changed

// Sort function
// this function takes another comparison function as an argument
// we do define inline comparison function or define function outside and used it as argument

// there must be two(a,b) arguments passed into a function 
// within function body we compare a & b 
// if we return 1 means "a" should be sorted higher
// if we return -1 means "b" sould be sorted higher
// and 0 means they(a & b) are equal

const sortOriginalArray = [1,3,4,5,6,7,3,8,8,4,2,3,3,4,5,2];

const sortedArray = sortOriginalArray.sort( (a,b) =>{
    if (a.valueOf()>b.valueOf()) return 1;
    if (b.valueOf()>a.valueOf()) return -1;
    return 0;
});


console.log('Sorted accending order array',sortedArray);