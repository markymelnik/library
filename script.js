// Library

const bodyContainer = document.querySelector(".body-container");
const addBookBtn = document.querySelector(".add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const submitFormBtn = document.querySelector(".submit-btn");
const bookForm = document.querySelector(".book-form");
const bookFormTitle = document.querySelector("#title");
const bookFormAuthor = document.querySelector("#author");
const bookFormPages = document.querySelector("#pages");
const bookCheckBox = document.querySelector("#readCheckbox")

const myLibrary = [];

let formBtnClicked = false;

class Book {
    constructor (title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
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
    const newBook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookCheckBox.value);
    if (bookCheckBox.checked) {
        newBook.readStatus = true;
    } else newBook.readStatus = false;
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
    bookCard.innerHTML = `Title: ${newBook.title}<br/> Author: ${newBook.author}<br/> ${newBook.pages} Pages<br/><br/> Read  `;

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "X";

    var cardCheckbox = document.createElement('input');
    cardCheckbox.type = "checkbox";
    if (newBook.readStatus) { 
        cardCheckbox.checked = true
    } else cardCheckbox.check = false;

    bookCard.append(cardCheckbox);
    bookCard.append(deleteBtn);
    bookCardContainer.append(bookCard);
    bodyContainer.append(bookCardContainer);

    deleteBtn.addEventListener('click', () => {
        bookCardContainer.remove();
    })
    
    cardCheckbox.addEventListener('change', () => {
        if (cardCheckbox.checked) { 
            newBook.readStatus = true;
         } else newBook.readStatus = false;
    })
};