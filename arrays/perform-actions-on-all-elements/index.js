const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false },
];

console.log(temperatures);

/*
const result = temperatures.map((temperature) => {
    temperature.isRecordTemp = true;
    return temperature;
});

console.log(result);
*/

/*
const result = temperatures.map((temperature) => {
    temperature.isHigh = true;
    return temperature;
});

console.log(result);
*/

const highTemp = temperatures.map((temperature) =>
    temperature.degrees > 70 ? {...temperature, isHight: true } : temperature,
);

console.log(highTemp);