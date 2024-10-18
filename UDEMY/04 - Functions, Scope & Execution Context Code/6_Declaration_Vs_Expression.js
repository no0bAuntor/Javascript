//Function Declaration

// console.log(addDollarSign(100)); -> can be accessed
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100));


//Function Expression

//console.log(addPlusSign(200)); -> cann't be accessed
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));