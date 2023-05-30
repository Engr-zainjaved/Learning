const contentBlockPrototype = {
    id: "no id",
    title: "no title",
    description: "no description"
}

const contentBlock1 = Object.create(contentBlockPrototype);

contentBlock1.i="ad23";
delete contentBlock1.i;
contentBlock1.title="this is title";
contentBlock1.description="this is description";
if ("i" in contentBlock1){
    console.log("property available")
} else {
    console.log("property not avaialble")
}

const arr = [2,3,4,[2,5] ];

const shallowCopy = Object.assign({}, contentBlock1)
const newShallowCopy = {...contentBlock1}

const arrayShallowCopy = arr.slice();
const newArrayShallowCopy = [...arr];

