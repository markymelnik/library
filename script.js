
const addBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const submitFormBtn = document.querySelector(".submit-btn");
const bookForm = document.querySelector(".book-form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");

let formBtnClicked = false;

let myLibrary = [];

class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
};

addBookBtn.addEventListener('click', () => {
    if (formBtnClicked) {
        bookForm.style.visibility = "hidden";
        formBtnClicked = false;
    } else {
        bookForm.style.visibility = "visible";
        formBtnClicked = true;
    }
});

closeFormBtn.addEventListener('click', () => {
    bookForm.style.visibility = "hidden";
    formBtnClicked = false;
});

submitFormBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(event) {
    event.preventDefault();
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    myLibrary.push(newBook);
    bookForm.style.visibility = "hidden";
    bookForm.reset();
    formBtnClicked = false;
};