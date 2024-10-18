let output;
output=document.all;
output=document.all[10];
output=document.all.length;
output=document.documentElement;
output=document.body;
output=document.body.children;

output=document.doctype;
output=document.domain;
output=document.url;
output=document.contentType;

output=document.forms;
output=document.forms[0];
output=document.forms[0].id;

// document.forms[0].id='new-id'; ->rename

output=document.links;
output=document.links[1];
output=document.links[0].href;

output=document.images;

//all can accessed by:
const forms=Array.from(document.forms);
forms.forEach((form)=>console.log(form));
console.log(output);