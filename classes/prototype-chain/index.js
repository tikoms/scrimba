// console.log(Object.getPrototypeOf({}));

// console.log(Object.getPrototypeOf({}).constructor);

// console.log(new Object());

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

const student1 = new Student(1, "Reed");

// console.log(Object.getPrototypeOf({ student1 }));
// console.log(Object.getPrototypeOf({ student1 }).constructor);
// console.log(student1.__proto__);
// console.log(student1.__proto__ === Student.prototype);
// console.log(student1.__proto__.__proto__ === Object.prototype);
console.log(student1.__proto__.__proto__.__proto__);