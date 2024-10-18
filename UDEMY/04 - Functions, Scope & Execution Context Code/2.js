function registerUSer(user) {
  return user + "is registered";
}

console.log(registerUSer("Auntor "));

function registerUSer2(user) {
  if (!user) {
    user = "Bot";
  }
  return user + " is registered";
}

console.log(registerUSer2());

//Default parameters

function registerUSer3(user = "Annonymous") {
  return user + " is registered";
}

console.log(registerUSer3("He"));

function registerUSer3(user = "Annonymous") {
  return user + " is registered";
}

console.log(registerUSer3());

//Rest Parameters
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as parameters
function loginUser(user)
{
    return `The user ${user.name} with id of ${user.id} is logged in`;
}

const user={
    id: 1,
    name: 'John',
};
console.log(loginUser(user));

console.log(
    loginUser({
        id: 2,
        name: 'Auntor',
    })
);


//Arrays as parametrs
function getRandom(arr)
{
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7])
