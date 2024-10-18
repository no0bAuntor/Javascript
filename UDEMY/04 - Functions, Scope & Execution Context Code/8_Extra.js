//const user ='Mutasam Billah'; -> will face error
(function () {
    const user = "Mutasam Billah";
    console.log(user);
    const hello = () => console.log('Hello');
    hello();
})();

(function (name){
    console.log('Hello ' + name);
})('World');
