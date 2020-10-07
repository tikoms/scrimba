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