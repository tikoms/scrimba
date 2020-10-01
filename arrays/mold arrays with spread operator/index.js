const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

// const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

/*
const otherMenuIdeas = [...allMenuIdeas];
const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];

console.log(allMenuIdeas);
console.log(otherMenuIdeas);
*/

/*
const allMenuIdeas = [
    ...breakfastMenuIdeas,
    "Harvest Salad",
    "Southern Fried Chicken",
    ...dinnerMenuIdeas,
];

console.log(allMenuIdeas);
console.log(allMenuIdeas.slice(1, 5));
*/

/*
const allMenuIdeas = [
    ...breakfastMenuIdeas,
    "Harvest Salad",
    "Southern Fried Chicken",
    ...dinnerMenuIdeas,
];

console.log(allMenuIdeas);

const saladIndex = allMenuIdeas.findIndex((MenuIdea) => {
    return MenuIdea === "Harvest Salad";
});

const MeatloafIndex = allMenuIdeas.findIndex((MenuIdea) => {
    return MenuIdea === "Meatloaf";
});

const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuIdeas.slice(saladIndex + 1, MeatloafIndex),
    ...allMenuIdeas.slice(MeatloafIndex + 1),
];

console.log(finalMenuIdeas);
*/

const allMenuIdeas = [
    ...breakfastMenuIdeas,
    "Harvest Salad",
    "Southern Fried Chicken",
    ...dinnerMenuIdeas,
];

console.log(allMenuIdeas);

const meatLoafIndex = allMenuIdeas.findIndex((MenuIdea) => {
    return MenuIdea === "Meatloaf";
});

const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, meatLoafIndex),
    ...allMenuIdeas.slice(meatLoafIndex + 1),
];

console.log(finalMenuIdeas);