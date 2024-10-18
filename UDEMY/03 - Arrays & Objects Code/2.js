const numbers=[1, 2 , 3, 4, 5 ,6 , 7];
let x;
/*
numbers.push(100);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(22);
console.log(numbers);


numbers.unshift(44);
console.log(numbers);


numbers.shift();
console.log(numbers);


// numbers.reverse();
// console.log(numbers);

x = numbers.includes(3);

x= numbers.includes(100);

x= numbers.indexOf(2);

x = numbers.indexOf(20);
*/
x= numbers.slice(1);
console.log(numbers[0]);
console.log(x, numbers);
x = numbers.slice(1,5);
console.log(x);

// "slice doesn't change initial array but splice does"
//x = numbers.splice(1,5);
console.log(x);

console.log(numbers)


