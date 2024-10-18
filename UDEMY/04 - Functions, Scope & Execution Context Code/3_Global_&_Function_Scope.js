window.alert("Hello");
console.log(window.innerWidth);

const x = 100;

console.log(x, "in global");
function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();

if (true) {
  console.log(x, "in block");
}

function num() {  
    const y = 50; //not accessible outside function
    console.log(y);
}
num();