// Properties can be accessed on an object by using dot or bracket notation

const contentBlock = {
    id : "no id",
    title : "no title",
    description : "no description"
};

console.log(contentBlock.description);      // accessed by using dot notation "."

console.log(contentBlock["description"]);   // accessed by using bracket notation " [] "

// we know that description property exist in "contentBlock" object but we also don't want to assume that it exist
// so, we always must code offensively

// JS returns undefined if we try to non-existant properties 

// by using hasOwnProperty we can check if property exists or not
// this will not check the object prototype of property existant
console.log(contentBlock.hasOwnProperty("color"));

// other way to check property is by using "in" operator
// the "in" operator also returns "true" for the property exist in object prototype
if ("color" in contentBlock){
    console.log("Property exist");
} else {
    console.log("Property does not exist");
}

// You can also check property by simple if condition

if (!contentBlock.color == undefined){}