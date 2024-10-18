// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").className);

// Set attributes
document.getElementById("app-title").id = "new-id";
document.getElementById('new-id').title = 'List'; //Now hover mouse in 'Shopping list' of web-page
document.getElementById('new-id').setAttribute('class', 'new-title');

const title=document.getElementById('new-id');
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent='Hello';
title.innerText='Hi';
title.innerHTML='<strong>Shopping List</strong>';

//change style
title.style.color='red';
title.style.background='gray'
title.style.padding='10px'
title.style.borderRadius='10px'

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem=document.querySelector('li:nth-child(2)');
secondItem.innerText='Egg';
secondItem.style.color='green'

// Use these methods on other elements
const list=document.querySelector('ul');
console.log(list);
const firstItem=list.querySelector('li');
firstItem.style.color='blue';