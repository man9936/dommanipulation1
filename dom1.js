
//console.log(document.body);
//console.log(document.head);
console.log(document.forms);
console.log(document.title);
let title=document.getElementsByTagName("title");

//console.log(document.body);
//console.log(document.head);
//console.log(document.forms);
//console.log(document.title);
let title=document.getElementById("header-title");
//console.log(title.textContent='hello');
/*
text content changes the whole text content irrespective of style of output
and html
innerText takes care of style
innerHTML adds changes through HTML format to the file instead of replacing it.
*/
let header=document.getElementById("main-header");
header.style.borderBottom='solid 5px #000';
title.innerHTML='<b>Item Lister</b>'
header.style.borderTop='solid 5px #000';
header.style.borderLeft='solid 5px #000';
header.style.borderLeft='solid 5px #000';
title.style.background='black';
title.style.color='green';



