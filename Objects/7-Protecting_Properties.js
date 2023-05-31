// In JS every key-value pair also has 3 more properties by default i.e.
// writable, configurable, enumerable
// and these all set to true by default

// Writable : false
// cannot edit, cannot delete, can change attribute

// To change these property we use ".defineProperty()" funtion 
// this function take 3 things, object, property, and list of attributes as key-value pair

const contentBlock = {
    id : "no id",
    title : "no title",
    description : "no description"
};

Object.defineProperty(contentBlock, "id", {
    writable: false,                    // cannot edit, cannot delete, can change attribute
    configurable: false                 // can edit, cannot delete, cannot change attribute
});

// Object.freeze sets the entire object --> writable: false, cofigurable: false, prevents extension, 
// Syntax
Object.freeze(contentBlock)

// Object.seal sets the entrie object --> configurable: false, prevents extension, properties can still be added 
// Syntax
Object.seal(contentBlock)

// Object.preventExtensions sets the entire object --> prevents extension, but properties still be edited and attributes can still be configured
// Syntax
Object.preventExtensions(contentBlock)