function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const x = 400;

  if (x == 400) {
    const y = 200;
    console.log(x + y);
  }
}
