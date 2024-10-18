const age = 20;
age >= 18 ? console.log("You can vote") : console.log("You cann't vote");

const canVote = age >= 18 ? true : false;
console.log(canVote);


const auth=true;

const redirect =auth
?(alert('Welcome to dashboard'), '/dashboard'):(alert('Access denied'),'/login');

console.log(redirect);