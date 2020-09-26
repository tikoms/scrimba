/*
const temperatures = [69, 82, 73, 64];

console.log(temperatures.indexOf(50));
console.log(temperatures.includes(150));
*/

const temperatures = [
    { degrees: 69, isRecordTemp: true },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: true },
    { degrees: 64, isRecordTemp: true },
];

/*
const result = temperatures.some((temperature) => {
    return temperature.isRecordTemp;
});

const result = temperatures.some((temperature) => temperature.isRecordTemp);
console.log(result);
*/

const result = temperatures.every((temperature) => {
    return temperature.isRecordTemp;
});

console.log(result);