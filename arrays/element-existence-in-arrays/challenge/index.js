const songs = [
    { song: "Shape of You", timesStreamed: 2.384, wonGrammy: true },
    { song: "One Dance", timesStreamed: 1.791, wonGrammy: false },
    { song: "Rockstar", timesStreamed: 1.781, wonGrammy: false },
    { song: "Closer", timesStreamed: 1.688, wonGrammy: false },
    { song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true },
];

/*
const result = songs.some((song) => {
    return song.wonGrammy;
});

const result = songs.some((song) => song.wonGrammy);

console.log(result);
*/

// const result = songs.every((song) => {
//     return song.timesStreamed >= 1.5;
// });

const result = songs.every((song) => song.timesStreamed >= 1.5);

console.log(result);