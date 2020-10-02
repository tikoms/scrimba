/*
const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon",
];
*/

/*
let first = finalMenuItems[0];
let second = finalMenuItems[1];
let third = finalMenuItems[2];

console.log(first, second, third);
console.log(`${first}, ${second}, ${third}`);
console.log({ first }, { second }, { third });
*/

/*
const [first, second, third] = finalMenuItems;
console.log({ first }, { second }, { third });
console.log(finalMenuItems);
*/

/*
const [first, second] = finalMenuItems;
console.log({ first }, { second });
*/

/*
let [first, second] = finalMenuItems;

// const [second, first] = [first, second];
console.log({ first }, { second });
[second, first] = [first, second];
console.log({ first }, { second });
*/

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon",
];

const [winner, ...loosers] = finalMenuItems;
console.log({ winner }, { loosers });