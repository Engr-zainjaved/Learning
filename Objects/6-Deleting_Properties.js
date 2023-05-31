// Syntax

/*

delete objectName.propertyName;
delete objectName["propertyName"];

*/

const contentBlock = {
    id : "no id",
    title : "no title",
    description : "no description"
};

delete contentBlock.title;      // deletes the "title" property

console.log(contentBlock);