const favouriteSongs = [];

const favouriteSong1 = "In the end";
const favouriteSong2 = "Keep their heads ringing";
const favouriteSong3 = "Lady in red";

favouriteSongs.push(favouriteSong1, favouriteSong2, favouriteSong3);

const lastSong = favouriteSongs.length - 1;
console.log(favouriteSongs[lastSong]);

favouriteSongs.pop();
console.log(favouriteSongs);