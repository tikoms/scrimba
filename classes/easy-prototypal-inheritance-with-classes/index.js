/*
class Student {}
console.log(typeof class Student {});
*/

/*
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
};
*/

class Student {
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }

    getStudentName() {
        return `Student: ${this.name}`;
    }

    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
    }
}

const student1 = new Student(1, "Reed");
student1.addSubject("Geometry");

console.log(student1);
console.log(student1.id);
console.log(student1.getStudentName());