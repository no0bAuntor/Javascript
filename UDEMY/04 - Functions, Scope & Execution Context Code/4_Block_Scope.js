const x = 100;
if (true) {
  const y = 200;
  console.log(x + y);
}

//console.log(x+y);  -> not possible

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
if (true) {
    const a =500;
    let b=600;
    var c= 700;  //can accessible
}
// console.log(a); -> error
// console.log(b); -> error
console.log(c);

function random() {
    var m =500; //not accessible outside function
    console.log(m);
}

//console.log(m); ->error
random();