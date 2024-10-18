// 1. Function declaration

function x() {
  console.log("hello");
}

x();

// 2. Function expressions

const a = function () {
  return 5 + 3;
};

console.log(a());

// 3. Annonymous function

const r = function (p, q) {
  return p * q;
};

const z = r(5, 6);
console.log(z);

// 4. selt invoking function
(function () {
  console.log("Auntor");
})();


// 5. Arguments are Passed by Value

function name1(x, y) {
    x=15;
    return x*y;
}

var p1=10;
var p2=20;

console.log(name1(p1,p2));

console.log(p1); // not change the value;


// 6. Objects are Passed by Reference (Work as pointer)

function objF(details) {
    details.one='Muslim';
}

const obj={
    one:'Mutasam Billah',
    two:'Auntor'
};
console.log(`My name is ${obj.one} ${obj.two}`);

objF(obj);
console.log(`After change my name ${obj.one} ${obj.two}`); // change value;



// 7. call() function
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

// 7.1 
const person3 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ","  + country;
  }
}

const person4 = {
  firstName:"John",
  lastName: "Doe"
}

person3.fullName.call(person4, "Oslo", "Norway");
console.log(person3.fullName.call(person4, "Oslo", "Norway"));


// 8. apply() function ---- Apply on array
const person7 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", "  + city + ", " + country;
  }
}

const person6 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person7.fullName.apply(person6, ["Oslo", "Norway"]));

