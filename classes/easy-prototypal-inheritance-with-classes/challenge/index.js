class Film {
    constructor(id, title, director, releaseYear, genres = []) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.genres = genres;
    }

    addGenre(genre) {
        this.genres = [...this.genres, genre];
    }

    getFilmTitle() {
        return `Film Title: ${this.title}`;
    }
}

const favouriteFilm = new Film(1, "Avatar", "Steven Spielberg", "2016");
favouriteFilm.addGenre("Sci-Fi");

console.log(favouriteFilm);
console.log(favouriteFilm.getFilmTitle());
console.log(favouriteFilm.genres);
console.log(favouriteFilm.director);