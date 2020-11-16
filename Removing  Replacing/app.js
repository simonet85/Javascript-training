//Creating new element 'li'
let li = document.createElement('li');
li.className = "collection-item";
let text = document.createTextNode("New Item");
li.appendChild(text);
let link = document.createElement('a');
link.setAttribute('href', '#');
link.className = "delete-item secondary-content";
li.appendChild(link);
let icon = document.createElement('i');
icon.className = 'fa fa-remove';
link.appendChild(icon);
document.querySelector("ul.collection").appendChild(li);
// console.log(li);

//Removing Element li

let items = document.querySelectorAll("li");
console.log(items.length);
items = items[0].remove();

document.body.addEventListener('click', deleteItem);

function deleteItem(e) { 
    e.preventDefault();
    // console.log(e.target.parentElement.classList.contains('delete-item'))
    if(e.target.parentElement.classList.contains('delete-item') ){
       e.target.parentElement.parentElement.remove();
    }
 }