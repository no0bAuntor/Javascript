// Get child element from parent
let output;
const parent=document.querySelector('.parent');
output=parent.children;
output=parent.children[1];
output=parent.children[1].innerText;
output=parent.children[1].nodeName;

parent.children[1].innerText='Child Two';
parent.children[1].style.color='blue';

parent.firstElementChild.innerText='Child One';
parent.lastElementChild.innerText='Child Last';

// Get parent elements from a child
const child=document.querySelector('.child');
output=child.parentElement;
child.parentElement.style.border='1px solid #ccc';
child.parentElement.style.padding='10px';


// Sibling Elements
const secondItem=document.querySelector('.child:nth-child(2)')
output=secondItem;
secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color='red';
console.log(output);