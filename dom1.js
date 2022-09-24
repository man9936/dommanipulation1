
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

task-8
/////////////////////////////////////////////////
create new list and remove it
var form=document.getElementById('addForm');
var itemList= document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

  let inp=document.getElementById("item").value;
   
  let li=document.createElement("li");
  li.className="list-group-item";

  li.appendChild(document.createTextNode(inp));
  itemList.appendChild(li);

  let del=document.createElement('button');
  del.className="btn btn-danger btn-sm float-right delete";

  del.appendChild(document.createTextNode("x"));

  li.appendChild(del);


}

=========================>>>>>>>>>>>>>>>REMOVE THE ITEM
itemList.addEventListener('click',remove);

function remove(e){


if(e.target.classList.contains('delete'))
{
    if(confirm('are you sure that you want to delete this item?')){

        let li=e.target.parentElement;
        itemList.removeChild(li); //list is the parent
    }
}


}


ADDING THE EDIT BUTTON
let list=document.querySelectorAll(".list-group-item")
console.log(list);
for(i=0;i<list.length;i++)
{
    var edit=document.createElement("button");
edit.className="btn btn-primary btn-sm float-right";
edit.appendChild(document.createTextNode("Edit"));
    list[i].appendChild(edit);
}
//////////////////////////////////////////////////////////////////////////////////////////////
TASK9 part 1
let filter=document.getElementById("filter");
filter.addEventListener('keyup',filterItems);

function filterItems(e) {
  var text=e.target.value.toLowerCase();
  var items=itemList.getElementsByTagName('li');
  
Array.from(items).forEach(function(item){
  var itemName = item.firstChild.textContent;
  if(itemName.toLowerCase().indexOf(text)!= -1) {
    item.style.display='block';
}                
else{
  item.style.display='none';
}                          
    

});
}





let sub=document.getElementsByClassName("btn btn-dark");
let newText= document.getElementById("addForm");
let newInput=document.createElement("input");
newInput.type="text";
newInput.className="form-control mr-2";


console.log(newText.children);
newText.insertBefore(newInput,newText.children[1]);


///////////////////////////////////////////
