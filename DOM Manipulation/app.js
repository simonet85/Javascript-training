let val;
const List = document.querySelector("ul.collection"); //Return Node


const ListItem = document.querySelector("li.collection-item:first-child"); //Return NodeList
val = List;

val = List.childNodes[0].nodeName; //Return a string appropriate for the type of node.Children
val = List.childNodes[0].nodeName = "Hi !"; 

val = List.children; //Return HtmlCollection
val = List.children[0] ; //Return the first Element html collection
val = List.firstChild;
val = List.firstElementChild;

val = ListItem.parentNode;
val = ListItem.parentElement.parentElement;
val = ListItem.nextSibling;
val = ListItem.nextElementSibling.textContent = "Ola Ola";


console.log(val);