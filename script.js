// Library

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

const formController = (() => {

	const bookForm = document.querySelector(".book-form");

	const initiateBookForm = () => {

		const addBookBtn = document.querySelector(".add-book-btn");

    addBookBtn.addEventListener('click', () => {
    	if (formBtnClicked) {
      	bookForm.style.visibility = "hidden";
        formBtnClicked = false;
      } else {
        bookForm.style.visibility = "visible";
      	formBtnClicked = true;
      }
  	})

  }

	const closeBookForm = () => {

		const closeFormBtn = document.querySelector(".close-form-btn");

		closeFormBtn.addEventListener('click', () => {
			bookForm.style.visibility = "hidden";
			formBtnClicked = false;
		})

	}

	const submitBookForm = () => {

		const submitFormBtn = document.querySelector(".submit-btn");
		submitFormBtn.addEventListener('click', libraryDisplayManager.addBookToLibrary);
	}

	return {
		initiateBookForm,
		closeBookForm,
		submitBookForm
	}

})();

const libraryDisplayManager = (() => {

	const addBookToLibrary = (form) => {

		const bookForm = document.querySelector(".book-form");
		const bookFormTitle = document.querySelector("#title");
		const bookFormAuthor = document.querySelector("#author");
		const bookFormPages = document.querySelector("#pages");
		const bookCheckBox = document.querySelector("#readCheckbox");

		form.preventDefault();
    const newBook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookCheckBox.value);
    if (bookCheckBox.checked) {
        newBook.readStatus = true;
    } else newBook.readStatus = false;
    myLibrary.push(newBook);
    displayBook(newBook);
    bookForm.style.visibility = "hidden";
    bookForm.reset();
    formBtnClicked = false;

	}

	const displayBook = (newBook) => {

		const bodyContainer = document.querySelector(".body-container");

		const bookCardContainer = document.createElement('div');
    bookCardContainer.className = "bookCardContainer";

    const bookCard = document.createElement('div');
    bookCard.className = "bookCard";
    bookCard.innerHTML = `Title: ${newBook.title}<br/> Author: ${newBook.author}<br/> ${newBook.pages} Pages<br/><br/> Read  `;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "X";

    const cardCheckbox = document.createElement('input');
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
	}

	return {
		addBookToLibrary,
		displayBook
	}

})();

const appController = (() => {

	formController.initiateBookForm();
	formController.closeBookForm();
	formController.submitBookForm();

})();