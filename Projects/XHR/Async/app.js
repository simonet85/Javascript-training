// 1. Define a function prefixed with the keyword 'async' 
async function getUser(){
  //2.Call the fetch() api prefixed the await keyword and get back the 'response'
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
// 3. convert the response to json or any appropriate format and prefixed the keyword await to get the actual 'data'
  const data = await response.json()
// 4.return the actual data
  return data
}

// 4.Finally call the function and display data
getUser().then(users =>  {
  let output = ''
  users.forEach(user => {
    output +=`
    <li><strong>Name: </strong>${user.name}
    <strong>Username: </strong>${user.username}
    <strong>Email: </strong>${user.email}</li>
    `
  });
  document.getElementById('users').innerHTML = output
})






