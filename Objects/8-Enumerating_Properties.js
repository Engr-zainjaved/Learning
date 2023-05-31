// Enumerable: able to be counted or named, one by one

// if we didn't want the property to be counted while loop through each property we can set
// enumerable: false

const contentBlock = {
    id : "no id",
    title : "no title",
    description : "no description"
};



Object.defineProperty(contentBlock, "id", {
    enumerable : false
});

// Accessing All Enumerable Own Properties
Object.keys(object);

// it will returns 
// ✔ enumerable properties
// ❌ non-enumerable properties
// ✔ Own properties
// ❌ Inherited properties

// Accessing Non-enumerable Properties on an Object
Object.getOwnPropertyNames(object);

// it will returns 
// ✔ enumerable properties
// ✔ non-enumerable properties
// ✔ Own properties
// ❌ Inherited properties

// Accessing Properties through for..in
for (let key in object){
    console.log(key);
}

// it will returns 
// ✔ enumerable properties
// ❌ non-enumerable properties
// ✔ Own properties
// ✔ Inherited properties