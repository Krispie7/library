let myLibrary = [];
const library= document.getElementById("library")

function book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus =readStatus
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages" +
        ", " + readStatus);
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
  myLibrary.push(new book(title, author, pages, readStatus));
}

function addBookToGrid(book){
    let newBook= document.createElement("div")
    let title=document.createElement("h3")
    let author = document.createElement("p")
    let pages = document.createElement("p")
    let readStatus = document.createElement("p")
    newBook.classList.add("book")
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
    return;
}

function updateBooks(){
    for (let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i].info);
    }
}

addBookToLibrary("The Cat in the Hat", "Dr. Suess", "15", "Read")
addBookToLibrary("Green Eggs and Ham", "Dr. Suess", "60", "Read✅")
addBookToGrid(myLibrary[1])

console.log(myLibrary)

/* Form buttons */

const openFormButton = document.getElementById("addButton");
const closeFormButton = document.getElementById("closeFormButton");
const overlay=document.getElementById("overlay");

function openForm(){
    document.getElementById("formContainer").classList.add('active')
    document.getElementById("overlay").classList.add('active')
    return;
}

function closeForm(){
    document.getElementById("formContainer").classList.remove('active')
    document.getElementById("overlay").classList.remove('active')
    return;
}

openFormButton.addEventListener('click', openForm)
closeFormButton.addEventListener('click', closeForm)
