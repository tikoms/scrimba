/*
const todos = {};

const todo1 = {
    text: "wash the dishes",
    complete: false,
};

todos[1] = todo1;
// console.log(todos);

todo2 = {
    text: "Do laundry",
    complete: false,
};

todos[2] = todo2;
console.log(todos);
*/

/*
const todos = [];

const todo1 = {
    text: "wash the dishes",
    complete: false,
};

const todo2 = {
    text: "Do laundry",
    complete: false,
};

todos[0] = todo1;
todos[1] = todo2;

console.log(todos);
*/

const todos = [];

const todo1 = {
    text: "wash the dishes",
    complete: false,
};

const todo2 = {
    text: "Do laundry",
    complete: false,
};

todos.push(todo1, todo2);

console.log(todos);

todos.pop();

console.log(todos);