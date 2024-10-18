const person = {
  name: "Auntor",
  age: 30,
  isAdmin: true,
  address: {
    street: "Sonka",
    city: "Bogura",
  },
  hobbies: ["Music", "sports"],
};

let x;
//console.log(person);

x = person.name;

x = person["age"];

x = person.address.street;

x = person.hobbies[0];

//person.name='Mutasam Billah';
//console.log(person.name);

delete person.age;
//console.log(person);

person.hasWife = false;

person.greet = function () {
  console.log(`I am ${this.name}`);
};
person.greet();

const person2 = {
  "first name": "Messi",
  "last name": "Ronaldo",
};

x = person2["first name"];

//x =pesron2.first name -> is not allowed;

console.log(x);
