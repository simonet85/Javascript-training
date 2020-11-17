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
    document.addEventListener('DOMContentLoaded', getTasks)
    form.addEventListener('submit', addTask)
    taskslist.addEventListener('click', removeTask)
    filter.addEventListener('keyup', filterTasks)
    clearBtn.addEventListener('click', clearTasks)
}

//Get tasks from localStorage
function getTasks(){
    let tasks
    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks.forEach(function(task){
                // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
        })
    }
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

    //Save in localstorage
    storeTaskInLocalStorage(taskInput.value)
    //Clear input value
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

function filterTasks(e){
    e.preventDefault()
  
  //Get the value of the input = term 
  const searched = e.target.value.toLowerCase();
  
        let collection = document.querySelectorAll('.collection-item');
       
        collection.forEach(function(task){
            //loop through the item collection
            //Get Each firstChild element textContent of List Item
            const item = task.firstChild.textContent

            //Check if the index  of the searched term is in the list 
            if(item.toLowerCase().indexOf(searched) != -1){
                //If true display the element
                task.style.display = "block"
            }else{
                //Else false display nothing
                task.style.display = "none"
            }
        })
}

//Store task
function storeTaskInLocalStorage( task ){
    let tasks 
    // Check out item in localstotage
    if(localStorage.getItem("tasks") === null){
        // Save an empty array
        tasks = []
    }else{
        //Saving JSON format because localstorage stores strings only
        tasks = JSON.parse(localStorage.setItem("tasks"))
    }
    tasks.push(task)

    // Save tasks in string forrmat
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';
  
    // Faster
    while(taskslist.firstChild) {
      taskslist.removeChild(taskslist.firstChild);
    }
}
    
