// Library

const addBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const submitFormBtn = document.querySelector(".submit-btn");
const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector("#title");
const bookFormAuthor = document.querySelector("#author");
const bookFormPages = document.querySelector("#pages");

const bodyContainer = document.querySelector(".body-container");

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
    const newBook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value);
    myLibrary.push(newBook);
    displayBooks(newBook);
    bookForm.style.visibility = "hidden";
    bookForm.reset();
    formBtnClicked = false;
};

function displayBooks(newBook) {
    var bookCard = document.createElement('div');
    bookCard.style.display = "grid";
    bookCard.style.width = "20%";
    bookCard.style.height = "50%";
    bookCard.style.border = "1px solid black";
    bookCard.innerHTML = JSON.stringify(newBook);
    bodyContainer.appendChild(bookCard);
};