//Loop through array
const items = ["book", "table", "chair", "kite"];

for (const item of items) {
  console.log(item);
}
const users = [
    { name: 'Brad'},
    { name: 'Lara'},
    { name: 'AUntor'},
]

for(const user of users)
{
    console.log(user.name);
}

//Loop over string
const str = 'Auntor';
for(const letter of str)
{
    console.log(letter);
}


//Loop over maps
const map = new Map();
map.set('name', 'Mutasam');
map.set('age', 22);

for(const [key, value] of map)
{
    console.log(key, value);
}