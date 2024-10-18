let x;

const cricketPlayers = ["Shakib", "Tamim", "Starc"];
const footballPlayer = ["Messi", "Neymar", "Ronaldo"];
cricketPlayers.push(footballPlayer);
//console.log(cricketPlayers);
players = [cricketPlayers, footballPlayer];
x=players[1][1];
console.log(x);
//x=cricketPlayers;

x = cricketPlayers[1][3];
x = cricketPlayers[3][3];

players = [cricketPlayers, footballPlayer];

//console.log(players);

x = cricketPlayers.concat(footballPlayer);

// x=players[0][2];

//spread operator(...)
x = [...cricketPlayers, ...footballPlayer];

x = [...cricketPlayers, footballPlayer];

//Flatten array
const arr = [1, 2, [3, 4], 5, [6, 7, 8]];
x = arr;

x = arr.flat();

//static method on array object

x = Array.isArray(cricketPlayers);
x = Array.isArray("Warner");

x = Array.from("1234510");
console.log(x);
