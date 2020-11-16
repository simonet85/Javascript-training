// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks
function tasks(){
    let taskname = [];
    taskname = prompt("Enter tasks. (Add-Remove-Display-Quit)");
    
}

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
function addStudent(){
    studentname = prompt("Enter the student name.")
    roster.push(studentname);
    
}
// and uses .push to add a new student to the array


// REMOVE STUDENT

// Create a function called remove that takes in a name
function removeStudent(){
    studentname = prompt("Enter the student to be removed.")
    let index = roster.indexOf(studentname);

    if( index > -1){
        roster.splice(index,1);
    }else{
        alert(" Student not found!");
    }
   
}
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
    return roster;
}

// Start by asking if they want to use the web app
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
let response = prompt('Do you want to use our web app? N/Y');
if(response.toLowerCase() === 'y' || response.toUpperCase() === 'Y'){
    while(true){
        let answer = prompt("What do want to do? (Add-Remove-Display-Quit)")
        if(answer.toLowerCase() === "add"){
            addStudent();
        }else if(answer.toLowerCase() === "remove"){
            removeStudent();
        }else if(answer.toLowerCase() === "display"){
            console.log(display());
        }
    }
}

// Use if and else if statements to execute the correct function for each command.
