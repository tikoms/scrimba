const numbers = [1, 2, 3, 4, 5, 6];

/*
const doubledNumbers = numbers.reduce((accumulator, number) => {
    accumulator.push(number * 2);
    return accumulator;
}, []);

console.log(doubledNumbers);
*/

/*
const greaterThanThree = numbers.reduce((accumulator, number) => {
    number > 3 ? accumulator.push(number) : number;
    return accumulator;
}, []);

console.log(greaterThanThree);
*/

const greaterThanThree = numbers.reduce(
    (acc, num) => (num > 3 ? acc.concat(num) : acc), [],
);

console.log(greaterThanThree);