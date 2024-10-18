console.log(document.querySelector('.phase'));
console.log(document.querySelectorAll('.phase'));
console.log(document.querySelector('#demo'));

// form
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo2").innerHTML = text;