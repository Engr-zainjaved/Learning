// As we know from objects defination that 
// All objects link to a prototype

// Many objects are predefined for us to use in JavaScript like
// Date, Math, Array, Function and so on

// Objects link to prototypes which define their behaviour 
// 

const myDate = new Date (); 
myDate.getDate();

// Here in above example we created new empty object "myDate"
// which is linked to already predefined object in JS i.e. "Date"
// the Date object is linked to it's prototype i.e. "Date.prototype"
// and finally the Date.prototype is linked to it's prototype i.e "Object.prototype"

// In above example we are calling "getDate()" method which we didn't define 
// JS first look this method in "Date" object which it will not find
// then it will look the method in "Date.prototype" where it will find the method

