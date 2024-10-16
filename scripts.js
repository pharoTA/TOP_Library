const myLibrary = [];

function Book(title, pages, author, isRead) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
};

function addBookToLibrary(title, pages, author, isRead) {
    newBook = new Book(title, pages, author, isRead);
    myLibrary.push(newBook);
};

function displayBook(book, library, i) {
    let article = document.createElement("article")
    article.id = i;
    let title = document.createElement('h3');
    title.textContent = book.title;
    let infos = document.createElement("p")
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton"
    deleteButton.innerText = "Remove book"
    infos.textContent = `by ${book.author}, ${book.pages} pages, ${book.isRead ? 'already finished' : 'not read yet'}`;
    article.appendChild(title);
    article.appendChild(infos);
    article.appendChild(deleteButton);
    library.appendChild(article);
};

function displayLibrary(myLibrary) {
    let library = document.querySelector(".libraryContainer")
    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i], library, i);
    }
};

function eraseLibrary() {
    let library = document.querySelector(".libraryContainer");
    library.innerHTML = "";
};

function removeBook() {

}

// Examples

// Example 1
let book1 = new Book("The Catcher in the Rye", 277, "J.D. Salinger", true);

// Example 2
let book2 = new Book("To Kill a Mockingbird", 324, "Harper Lee", false);

// Example 3
let book3 = new Book("1984", 328, "George Orwell", true);

// Example 4
let book4 = new Book("The Great Gatsby", 180, "F. Scott Fitzgerald", false);

myLibrary.push(book1, book2, book3, book4);
displayLibrary(myLibrary);

const dialogBox = document.querySelector(".addBookDialog");
const addNewBookButton = document.querySelector(".addNewBook");
const confirmNewBookButton = document.querySelector(".confirmNewBook");

addNewBookButton.addEventListener("click", () => {
    dialogBox.showModal();
});

deleteButtons = document.querySelectorAll('.deleteButton');
for (deleteButtonIndex = 0; deleteButtonIndex < deleteButtons.length; deleteButtonIndex++) {
    deleteButtons[deleteButtonIndex].addEventListener("click", (e) => {
        e.preventDefault();
        myLibrary.splice([e.target.parentElement.id], [e.target.parentElement.id]);
        e.target.parentElement.innerHTML = "";
        console.log("Success")
    })
}

confirmNewBookButton.addEventListener("click", (e) => {
    e.preventDefault()
    // Retrieve the book title from the text input
    let bookTitle = document.querySelector('input[name="bookTitleInput"]').value;

    // Retrieve the number of pages from the number input
    let bookPages = document.querySelector('input[name="bookPagesInput"]').value;

    // Retrieve the author name from the text input
    let bookAuthor = document.querySelector('input[name="bookAuthorInput"]').value;

    // Retrieve the checkbox state (whether the book is read or not)
    let bookIsRead = document.querySelector('input[name="bookIsReadInput"]').checked;
    addBookToLibrary(bookTitle, bookPages, bookAuthor, bookIsRead);
    eraseLibrary();
    displayLibrary(myLibrary);
    dialogBox.close();
})