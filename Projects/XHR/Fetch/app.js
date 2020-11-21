document.getElementById('button1').addEventListener('click',getText)

document.getElementById('button2').addEventListener('click',getJson)

document.getElementById('button3').addEventListener('click',getApi)

function getText(e){
  
    fetch("test.txt")
    .then( function(res){
      return res.text()
    })
    .then( function(data){
      console.log(data)
      document.getElementById('output').innerHTML = `<h1> ${data} </h1>`
    })
    .catch( function(error){
      console.log(error)
    })
    e.preventDefault()
  
}



function getJson(e){
  
  fetch("posts.json")
  .then( function(res){
    return res.json()
  })
  .then( function(data){
    console.log(data)
    let output = ''
    data.forEach(function(d){
      output += `<p>Title:${d.title} Body:${d.body}</P>`
      document.getElementById('output').innerHTML = output
    })
  })
  .catch( function(error){
    console.log(error)
  })
  e.preventDefault()

}

function getApi(e){
  
  fetch('https://api.github.com/users')
  .then( function(res){
    return res.json()
  })
  .then( function(data){
    console.log(data)
    let output = ''
    data.forEach(function(d){
      output += `<p>Login:${d.login}</p>`
      document.getElementById('output').innerHTML = output
    })
  })
  .catch( function(error){
    console.log(error)
  })
  e.preventDefault()

}