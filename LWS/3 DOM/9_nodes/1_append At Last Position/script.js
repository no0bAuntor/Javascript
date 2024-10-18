const para=document.createElement("p");

const node=document.createTextNode("Hello World");

para.appendChild(node);   // <p>Hello Word</p>

const element=document.getElementById("div1");
element.appendChild(para);