
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
/*
let header=document.getElementById("main-header");
header.style.borderBottom='solid 5px #000';
title.innerHTML='<b>Item Lister</b>'
header.style.borderTop='solid 5px #000';
header.style.borderLeft='solid 5px #000';
header.style.borderLeft='solid 5px #000';
title.style.background='black';
title.style.color='green';
let list=document.getElementById("items");
console.log(list.childElementCount);

*/
let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
/*
items[2].textContent='helloyoutoo';
items[2].style.fontWeight='bold';

*/
for(var i=0;i<items.length ; i++)
{
    items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='green';




