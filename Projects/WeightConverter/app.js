const output = document.querySelector("#output")
const form = document.querySelector("#task-form")
const inputVal = document.querySelector("#temperature")
const errorDiv = document.querySelector("#errorDiv")

loadEventListener();
function loadEventListener(){
    form.addEventListener("submit", weight)
}
function weight(e){
    
    const inputval = parseInt(inputVal.value)

    if(inputval ==="" || isNaN(inputval)){
        errorinput()
    }
    else{
        const result  = Math.floor(inputval/0.0022046)
        output.innerHTML = result 
    }

    e.preventDefault();
   
  
}

function errorinput(){
    const div = document.createElement('div')
    div.className = "alert alert-danger"
    div.setAttribute("role", "alert")
    div.innerHTML = `<p>Please enter a valid input !</p>`
    errorDiv.appendChild(div)
   
}

function clearerror(){
    errorDiv.style.display = "none"
}

setTimeout(clearerror, 3000)

