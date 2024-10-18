function myFunc() {
    console.log('Hello World');
    
}

function over(text) {
    console.log(text);
    
}

const button=document.getElementById('button');

button.addEventListener('click', myFunc);  // method 1 (no arguement)


button.addEventListener('mouseover', function() {
    over("Mouse over");
});  // method 2 (passing arguement)