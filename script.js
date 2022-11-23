// Library

const bodyContainer = document.querySelector(".body-container");
const addBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const submitFormBtn = document.querySelector(".submit-btn");
const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector("#title");
const bookFormAuthor = document.querySelector("#author");
const bookFormPages = document.querySelector("#pages");

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

    var bookCardContainer = document.createElement('div');
    bookCardContainer.className = "bookCardContainer";

    var bookCard = document.createElement('div');
    bookCard.className = "bookCard";
    bookCard.innerHTML = `Title: ${newBook.title}<br/> Author: ${newBook.author}<br/> Pages: ${newBook.pages}`;

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "X";

    bookCard.appendChild(deleteBtn);
    bookCardContainer.appendChild(bookCard);
    bodyContainer.appendChild(bookCardContainer);

    deleteBtn.addEventListener('click', () => {
        bookCardContainer.remove();
    })
};