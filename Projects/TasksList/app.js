// 1./select the #task-form 
const form = document.querySelector("#task-form")
// 2./select the .collection
const taskslist = document.querySelector('.collection')
// 3./select the .clear-taskList
const clearBtn = document.querySelector(".clear-tasks")
// 4./select the #filter 
const filter = document.querySelector("#filter")
// 5./select the #task
const taskInput = document.querySelector("#task")

//call load event
loadEventListener();
//loading event
function loadEventListener(){
    form.addEventListener('submit', addTask)
    taskslist.addEventListener('click', removeTask)
}

//Add Element
function addTask(e){
    e.preventDefault()
    if(taskInput.value === '') alert("Enter a task")

    const li = document.createElement("li")
    li.className = "collection-item"
    const text = document.createTextNode(taskInput.value)
    li.appendChild(text)
    const a = document.createElement("a")
    a.className = "delete-item secondary-content"
    a.setAttribute("href", "#")
    a.innerHTML = "<i class='fa fa-remove'></i>"
    li.appendChild(a);
    taskslist.appendChild(li)  
    taskInput.value = " "
}

//Remove Element

function removeTask(e){
    e.preventDefault()
   
    if(e.target.parentElement.classList.contains("delete-item")){
       if( confirm("Do you really want to delete?")){
           e.target.parentElement.parentElement.remove()
       }
    }
}
    
