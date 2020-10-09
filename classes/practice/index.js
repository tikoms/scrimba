/*
const student1 = {
    id: 1,
    name: "Reed",
    subjects: [],
    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
    },
};
*/

/*
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

console.log(new Student(1, "Reed"));

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
};

const student1 = new Student(1, "Reed");
student1.addSubject("Physics");

const student2 = new Student(2, "Schwarzman");
student2.addSubject("Chemistry");

console.log(student1);
console.log(student2);
*/

function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

const favouriteBook1 = new Book(1, "Village Headmaster", "NTA");
const favouriteBook2 = new Book(2, "Cock crows at dawn", "Chris Okotie");

console.log(favouriteBook1.__proto__);
console.log(favouriteBook1.__proto__ === Book.prototype);

Book.prototype.addTheme = function(theme) {
    this.themes = [...this.themes, theme];
};

favouriteBook1.addTheme("Rising star");
favouriteBook2.addTheme("Niagara falls");

// console.log(favouriteBook1.__proto__);
// console.log(Object.getPrototypeOf(favouriteBook1).constructor);

/*
console.log(Object.getPrototypeOf({}).constructor);
console.log(Object.getPrototypeOf(favouriteBook1).constructor);
console.log(Object.getPrototypeOf(favouriteBook2).constructor);

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(favouriteBook1));
console.log(Object.getPrototypeOf(favouriteBook2));
*/

/*
console.log(favouriteBook1);
console.log(favouriteBook2);
*/