document.getElementById('button').addEventListener("click", function(){

  const xhr = new XMLHttpRequest()
  xhr.open("GET",'data.txt', true)
  xhr.onload = function(){
    if(this.status === 200){
      document.getElementById('output').innerHTML = `<h1>${this.responseText}<h1/>`
     
    }
  }
  // xhr.onreadystatechange = function(){
  //   if(this.status === 200 && this.readyState === 4)
  //   console.log(this.responseText)
  // }
  xhr.send()
})