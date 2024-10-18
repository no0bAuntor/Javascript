let output;

const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[1];
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[3].style.color = "red";
parent.lastChild.textContent='Hello';
// Parent Node
const child = document.querySelector(".child");
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
console.log(output);
