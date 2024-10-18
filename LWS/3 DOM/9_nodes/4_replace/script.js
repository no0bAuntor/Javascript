const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
parent.replaceChild(para,child);