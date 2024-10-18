// 1.

// function display(result)
// {
//     console.log(result);
    
// }

// function calculator(num1, num2, callback) {
//     let num=num1+num2;
//     if (callback) {
//         callback(num);
//     }
// }

// calculator(5, 6, display);


// 2. ---> not showing the result
// function display2(result)
// {
//     console.log(result);
    
// }

// function calculator2(num1, num2, callback2) {
//     let num=num1+num2;
//     if (callback2) {
//         callback2(num);
//     }
// }

// calculator2(5, 6);

// 3. 
function calculator3(num1, num2, callback3) {
    let num= num1+num2;
    if (callback3) {
        callback3(num);
    }
};

calculator3(10, 20, function (result3) {
    console.log(result3);
    
});