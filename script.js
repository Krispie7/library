let myLibrary = [];
const library= document.getElementById("library")

function book(title, author, pages, readStatus, bookNumber){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus =readStatus
    this.bookNumber= bookNumber
}

function addBookToLibrary(title, author, pages, readStatus) {
    let bookNumber="book"+(myLibrary.length+1).toString();
    myLibrary.push(new book(title, author, pages, readStatus, bookNumber));
    addBookToGrid(myLibrary[myLibrary.length-1])
    return;
}

function addBookToGrid(book){
    let newBook= document.createElement("div")
    let title=document.createElement("h3")
    let author = document.createElement("p")
    let pages = document.createElement("p")
    let readStatus = document.createElement("p")
    newBook.classList.add("book")
    newBook.dataset.bookNumber=book.bookNumber

    title.innerHTML=book.title
    author.innerHTML="by " + book.author
    pages.innerHTML="Pages: " + book.pages
    readStatus.innerHTML=book.readStatus
    author.classList.add("three")
    pages.classList.add("two")
    readStatus.classList.add("four")
    newBook.appendChild(title)
    newBook.appendChild(pages)
    newBook.appendChild(author)
    newBook.appendChild(readStatus)
    library.appendChild(newBook)
    newBook.addEventListener('click', e => {
        openEditForm(e.target.closest('.book').dataset.bookNumber)
    })
    return;
}

/* Form buttons */

const openFormButton = document.getElementById("addButton");
const closeFormButton = document.getElementById("closeFormButton");
const submitFormButton=document.getElementById("submitFormButton")
const overlay=document.getElementById("overlay");
const openMenuButton = document.getElementById("menuButton");
const closeMenuButton =document.getElementById("closeButton");

const openEditButtons= document.querySelectorAll("[data-book-number]");
const submitEditButton= document.getElementById("submitEditButton");
const closeEditButton= document.getElementById("closeEditButton");

function openMenu(){
    document.getElementById("menu").classList.add("active")
}

function closeMenu(){
    document.getElementById("menu").classList.remove("active")
}

function openForm(){
    document.getElementById("addBookFormContainer").classList.add('active')
    document.getElementById("overlay").classList.add('active')
    return;
}

function closeForm(){
    document.getElementById("addBookFormContainer").classList.remove('active')
    document.getElementById("overlay").classList.remove('active')
    return;
}

function openEditForm(bookNumber){
    let title= document.getElementById("titleDisplay")
    let author= document.getElementById("authorDisplay")
    let pages= document.getElementById("pagesDisplay")
    let currentBook=myLibrary[myLibrary.findIndex(book=>book.bookNumber==bookNumber)]
    title.value=currentBook.title
    author.value=currentBook.author
    pages.value=currentBook.pages
    if (currentBook.readStatus=="Read✅"){
        document.querySelector("#readStatusDisplay.false").removeAttribute("checked", "")
        document.querySelector("#readStatusDisplay.true").setAttribute("checked", "")
    }
    else if (currentBook.readStatus=="Unread❌"){
        document.querySelector("#readStatusDisplay.true").removeAttribute("checked", "")
        document.querySelector("#readStatusDisplay.false").setAttribute("checked", "")
    }
    document.getElementById("editBookFormContainer").classList.add('active')
    document.getElementById("overlay").classList.add('active')
}

function closeEditForm(){
    document.getElementById("editBookFormContainer").classList.remove('active')
    document.getElementById("overlay").classList.remove('active')
}

function submitEditForm(){

}

openFormButton.addEventListener('click', openForm)
closeFormButton.addEventListener('click', closeForm)
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)


submitEditButton.addEventListener('click', submitEditForm)
closeEditButton.addEventListener('click', closeEditForm)



submitFormButton.addEventListener('click', ()=>{
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let pages=document.getElementById("pages").value
    let readStatus=document.querySelector("input[name='readStatus']:checked").value
    addBookToLibrary(title, author, pages, readStatus)
    closeForm();
    return;
})

/*when book is clicked, open a form to update the book's properties,
add event listener update button in form to call function that retrieves
what library index the book is in, then changes its properties with the changes 
the user made*/
