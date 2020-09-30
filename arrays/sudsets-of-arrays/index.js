const restaurants = [
    { name: "Cap City Diner", milesAway: 2.2 },
    { name: "Chop Shop", milesAway: 4.1 },
    { name: "Northstar Cafe", milesAway: 0.9 },
    { name: "City Tavern", milesAway: 0.5 },
    { name: "Shake Shack", milesAway: 5.3 },
];

/*
console.log(restaurants);

const results = restaurants.filter((restaurant) => {
    return restaurant.name.startsWith("C");
});

console.log(results);
*/

/*
const results = restaurants.filter((restaurant) => {
    restaurant.name.startsWith("C") && restaurant.milesAway < 3 ?
        console.log(restaurant) :
        restaurant;
});
*/

/*
const results = restaurants.filter((restaurant) => {
    restaurant.name.startsWith("C") &&
        restaurant.milesAway < 3 &&
        console.log(restaurant);
});
*/

/*
const results = restaurants.filter((restaurant) => {
    return restaurant.name.startsWith("C") && restaurant.milesAway < 3;
});

console.log(results);
*/

/*
const results = restaurants.filter(
    (restaurant) => restaurant.name.startsWith("C") && restaurant.milesAway < 3,
);

console.log(results);
*/

/*
const result = restaurants.find((restaurant) => {
    return restaurant.name.startsWith("Northstar") && restaurant.milesAway < 2;
});

console.log(result);
*/

/*
const result = restaurants.find((restaurant) => {
    return restaurant.name.startsWith("North") && restaurant.milesAway < 2;
});

console.log(result);
*/

/*
const result = restaurants.find((restaurant) => {
    // return restaurant.name.startsWith("north") && restaurant.milesAway < 2;
    return (
        restaurant.name.toLowerCase().startsWith("north") &&
        restaurant.milesAway < 2
    );
});

console.log(result);
*/

/*
const result = restaurants.find((restaurant) => {
    return restaurant.name.includes("North") && restaurant.milesAway < 2;
});

console.log(result);
*/

const result = restaurants.find((restaurant) => {
    // return restaurant.name.includes("north") && restaurant.milesAway < 2;
    return (
        restaurant.name.toLowerCase().includes("north") && restaurant.milesAway < 2
    );
});

console.log(result);