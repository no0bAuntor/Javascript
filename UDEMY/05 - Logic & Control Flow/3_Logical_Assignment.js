//  || assigns the right side value only if the left is a falsy value

let a = false;

a = a || 10;
console.log(a);

// && assigns the right side value only if the left is a truthy value

let b = true;

b = b && 20;
console.log(b);

// ?? assigns the right side value only if the left is null or undefined
let c=null;
c = c ?? 50;
console.log(c);
