const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

//This can be weritten as
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
const sum3 = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum);
console.log(sum2);
console.log(sum3);

// Using a for loop
const sum4 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc = acc + cur;
  }
  return acc;
};

console.log(sum4());

//object
const cart=[
    {id: 1,name:'Product 1', price: 130},
    {id: 2,name:'Product 2', price: 150},
    {id: 3,name:'Product 3', price: 120},
];

const total=cart.reduce(function(acc, Product){
    return acc+Product.price
},0);
console.log(total);
