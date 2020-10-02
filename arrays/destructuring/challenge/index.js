const fishDishes = [
    "Salmon Rillettes",
    "Grilled Tuna Provencal",
    "Fish and Chips",
];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;
console.log({ chefsFishDishes, regularFishDishes });
// let regularFishDishes;

// let chefsMeatDishes;
let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
console.log({ regularMeatDishes, chefsMeatDishes });

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes];
console.log({ chefsDishes });
let regularDishes = [regularMeatDishes, ...regularFishDishes];
console.log({ regularDishes });
// console.log({ chefsDishes, regularDishes });
let result = [chefsMeatDishes, chefsFishDishes];
console.log({ result });