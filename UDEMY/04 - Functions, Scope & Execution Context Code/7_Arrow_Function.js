//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));


//Implicit return
const subtract = (a, b) => a - b;
console.log(subtract(1, 5));


const double = a => a * 2; // for single parameter (no need to require parenthesis)
console.log(double(10));


//Returning an Object
const createObj = () =>({
    name: 'Auntor',
});

console.log(createObj());


//Arrow function in a callback
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(n));

