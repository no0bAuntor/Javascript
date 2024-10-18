let x;

const todo = new Object();

todo.id = 1;
todo.name = "Study";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 1515.26,
      lng: -745.26,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//const obj3={obj1, obj2};
const obj3 = { ...obj1, ...obj2 };

x = obj3;

const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todos = [
  { id: 1, name: "play" },
  { id: 2, name: "sleep" },
  { id: 3, name: "Bath" },
];

x = todos[1].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("name");

console.log(x);
