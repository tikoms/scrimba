const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },
];

/*
const totalWeight = cars.reduce((accumulator, car) => {
    accumulator += car.weight;
    return accumulator;
}, 0);

console.log(totalWeight);
*/

/*
const electricTotalWeight = cars.reduce((accumulator, car) => {
    car.isElectric ? (accumulator += car.weight) : car;
    return accumulator;
}, 0);

console.log(electricTotalWeight);
*/

const electricTotalWeight = cars.reduce((accumulator, car) => {
    car.isElectric && (accumulator += car.weight);
    return accumulator;
}, 0);

console.log(electricTotalWeight);