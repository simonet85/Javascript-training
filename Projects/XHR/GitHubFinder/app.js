// Intantiate GitHub class
const github = new GitHub()
//Instantiate UI class
const ui = new UI()
const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup', (e)=>{
    const textInput = e.target.value
    if(textInput !== ''){
        github.getUser(textInput).then(data=>{
            if(data.data.message === 'Not Found'){
                ui.showAlert('User Not Found', 'alert alert-danger')
            }else{
                ui.showProfile(data.data)
                ui.showRepos(data.repos)
            }
            // console.log(data)
        })
    }else{
        //Clear profile
        ui.clearProfile()
    }
e.preventDefault()
})