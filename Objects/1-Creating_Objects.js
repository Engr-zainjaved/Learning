 // CREATING OJECTS WITH OBJECT LITERAL SYNTAX

// Syntax 👇

const myObject = {

}; 

// Objects contain key-value pair
// For key we don't use " " (quotation marks) although in some cases in illegal key name (like space b/w name or hypen)

const myNewObject = {
    title: "Objects in JavaScript",         // 👈 each key-value pair separated by ,(comma)
    id: "1-Creating_Objects",
    "author-name": "zain javed",
    "source code": 51                       // 👈 no need to add comme(,) at the last pair but code works fine if you also add 
};                                          // 👈  semi-colon(;) is used b/c the whole thing is expression
 
// In above example title, id, author-name, source code, 
// all are keys and there corresponding values are in front of them separated by :(colon)
//_______________________________________________________________________________________________________________________________
                 
// SYNTAX COMPARISON BETWEEN OBJECT AND JSON 👇
/*
the below is syntax of JSON:

 {
    "title": "Objects in JavaScript",         // 👈 each key-value pair separated by comme (,)
    "id": "1-Creating_Objects",               // 👈  also each key is wrapped with quotation marks (" ")
    "author-name": "zain javed",
    "source code": 51                       // 👈 doesn't include comma(,) at the last key-value pair
}                                           // 👈 doesn't inclued semi-colon(;) at the end 

*/

//_______________________________________________________________________________________________________________________________

// CREATING OBJECTS WITH "new" SYNTAX
// remeber the defination: i.e. all object link to a prototype here "Date" object links to a "Date.prototype" which is further linked to a "Object.prototype"


//Syntax

const myDate = new Date ();                     // here we created a new object(myDate) by creating new instance from already defined "Date" object
myDate.getDay();                                // and instantly my new object (myDate) get access to the properties/methods which are already defined in the "Date" object
                                                // as we didn't define "getDay()" method but still have access to 

// quick question: so what object/prototype our first defined object (myNewObject) linked to ?
// and what is this prototype? check next code file.