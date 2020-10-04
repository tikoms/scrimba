function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

const favouriteBook1 = new Book(1, "Things fall apart", "Asina Ugowe");
const favouriteBook2 = new Book(2, "The passport of malam Ilia", "Chris Oboh");

Book.prototype.addThemes = function(theme) {
    this.themes = [...this.themes, theme];
};

favouriteBook1.addThemes("palegoldenrod");
favouriteBook2.addThemes("slateGray");

console.log(favouriteBook1);
console.log(favouriteBook2);