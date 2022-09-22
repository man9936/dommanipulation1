
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
*/
let header=document.getElementById("main-header");
header.style.borderBottom='solid 5px #000';
title.innerHTML='<b>Item Lister</b>'
header.style.borderTop='solid 5px #000';
header.style.borderLeft='solid 5px #000';
header.style.borderLeft='solid 5px #000';
title.style.background='black';
title.style.color='green';
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

/*
let ul= document.getElementsByTagName("ul");
console.log(ul);

let l1=document.createElement("li");
l1.textContent='item 5';
l1.className='js-created';
ul[0].appendChild(l1);
*/
let ul= document.getElementsByClassName("list-group");
console.log(ul);


let newL=document.createElement('li');
newL.innerHTML='item by class name changed';
ul[0].appendChild(newL);


let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[1].style.background='green';
items[2].style.display='none';
*/


/*
console.log(list);

list[1].style.color='green';
*/
let list=document.querySelectorAll("li");
for(let i=0;i<list.length;i+2)
{
    list[i].style.background='green';
}
console.log(list);

task-7//////////////////////////////////////
var items= document.querySelector("#items");
let newdiv=document.createElement("div");
let newNode=document.createTextNode("HEllo");
newdiv.appendChild(newNode);
let h1=document.querySelector("header h1");
let container=document.querySelector("header .container");
container.insertBefore(newdiv,h1);

let list=document.createElement("li");
let hello=document.createTextNode("HEllo");
list.appendChild(hello);

let first=document.querySelector("ul");
let li=document.querySelector(".list-group-item");
first.insertBefore(list,li);
///////////////////////////////////////////
