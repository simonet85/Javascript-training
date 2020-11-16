//Step 1: use the createElement() function to create the dedicated element e.g 'li', 'p'...
let li = document.createElement("li");
//Step 2: add a class to the newly created element using className property.
li.className = "collection-item";
//Step 3: add an id to the newly created element using id property.
li.id = "collection"
//Step 4: add an Attribute prop to the newly created element using setAttribute('title', 'this is an li') function.

li.setAttribute('title', 'this is new list item');
//Step 5: create a TextNode using createTextNode('Text node) and append it using appendChild() to the created element

let text = document.createTextNode('New Task');
li.appendChild(text);

//Step 6: create an anchor(link) using createElement('a') 
let link = document.createElement('a');

//Step 7: Add a class (delte-item secondary-content) using className property to the link 
link.setAttribute('href', '#');
link.className = "delete-item secondary-content";

//Step 8: Append the link as child to the element
li.appendChild(link);

let icon = document.createElement('i');
icon.className = "fa fa-remove";
link.appendChild(icon);

//Append the li as child to ul
let ul = document.querySelector("ul.collection");
ul.appendChild(li);
console.log(ul);




