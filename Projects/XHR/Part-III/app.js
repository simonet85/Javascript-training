document.querySelector('.get-jokes').addEventListener('click',getJokes)

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;

  if(number < 0){
    document.querySelector('input[type="number"]').className= "disabled"
  }
  const xhr = new XMLHttpRequest()
 xhr.open("GET",`https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200 && this.readyState === 4){
      const response  = JSON.parse(this.responseText)
      let output = ''
      if(response.type === "success"){
        response.value.forEach(value => {
          output += `
          <li>${value.joke}</li>
          `
        });
      }else{
        output += `
        <li>Something went wrong</li>
        `
      }
     document.querySelector('.jokes').innerHTML = output

    }
  }
  xhr.send()
  e.preventDefault()
}

