const firstName = "Mutasam";
const lastName = "Billah";
const age = 22;

const person = {
  firstName,
  lastName,
  age,
};

//console.log(person.age);

//Destructing

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Auntor",
  },
};

// const {id, title, user:{name},} = todo;

// console.log(name);

const {
  id: todoId,
  title,
  user: { name },
} = todo;

//console.log(todoId);

//Destructure Arrays
const numbers = [10, 8, 45, 26, 96, 39];

// const [first, second] = numbers;

// console.log(first,second);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);
