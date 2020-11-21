document.getElementById('button2').addEventListener('click', function(e){
  const xhr = new XMLHttpRequest ()
  xhr.open("GET","customer.json", true)
  xhr.onload = function(){
    if( this.status === 200 && this.readyState === 4){

      // Convert to Object into string
          const customers = JSON.parse(
            this.responseText
          )
          let output = ""
            customers.forEach(customer => {
              output +=
              `<ul>
                  <li>Name: ${customer.name}</li>
                  <li>Company: ${customer.company}</li>
                  <li>Phone: ${customer.phone}</li>
              </ul>`
            })
         
          document.getElementById("customers").innerHTML = output
    }
  }
  xhr.send()
e.preventDefault()
})