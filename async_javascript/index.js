/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
});

alert("done");
*/

/*
navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
    alert("done");
});
*/

navigator.geolocation.getCurrentPosition((position) => {
    alert(position);
    getRestaurants((position, restaurants) => {
        alert(restaurants);
        alert("done");
    });
});