class Book{
    constructor(title, isbn, author){
        this.title = title,
        this.isbn = isbn,
        this.author = author
    }
}

//UI class
class UI{
    //Method add ui
    addToBookList(book){
        const list = document.getElementById("book-list")
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${book.title}</td>
                        <td>${book.isbn}</td>
                        <td>${book.author}</td>
                        <td><a href="#" class="delete">X<a></td>`
        // console.log(list)
        list.appendChild(tr)
    }
    //Alert 
    showAlert(message, className){
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector("#book-form")
        container.insertBefore(div, form)
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000)

    }
    //Delete
    deleteBook( target ){
        if(target.className === "delete")
        target.parentElement.parentElement.remove()
    }
    //Clear Fields
    clearField(){
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("isbn").value = ""
    }
}
//UI class ends

//EventListener for addBook
document.getElementById("book-form").addEventListener("submit", function(e){
   
    const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value

    //instantiate Book class
    const book  = new Book(title, author, isbn)

    //instantiate UI Class
    const ui = new UI()
    console.log(ui)
    if(title === ''|| author ==='' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        ui.addToBookList(book)
        ui.showAlert("Book Added!", "success")
        ui.clearField()
    }
    e.preventDefault()

})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI()
    ui.deleteBook(e.target)
    e.preventDefault()
});