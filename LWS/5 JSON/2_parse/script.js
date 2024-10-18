// 1. convert to object

const jsonString='{"name":"Auntor", "age":22, "city":"Bogura"}';

console.log(jsonString);

const myObj=JSON.parse(jsonString);

console.log(myObj);

// 2.convert to array

const text='["Ford", "BMW", "Audi", "Fiat"]';

console.log(text);

const myArray=JSON.parse(text);

console.log(myArray);

// 3. reviver function

const me='{"name":"Auntor", "birth": "2002-07-15", "School":"RDALSC"}'

const meObj=JSON.parse(me, function (key, value) {
    if (key==='birth') {
        return new Date(value);
    } else{
        return value;
    }
});

console.log(meObj);
