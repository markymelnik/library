// Library

class Book {
	constructor (title, author, pages, readStatus) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.readStatus = readStatus;
	}
};

const bookFormController = (() => {

	const bookForm = document.querySelector(".book-form");
	const bookFormTitle = document.querySelector("#title");
	const bookFormAuthor = document.querySelector("#author");
	const bookFormPages = document.querySelector("#pages");
	const bookCheckBox = document.querySelector("#readCheckbox");

	let formBtnClicked = false;

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
			bookForm.reset();
			formBtnClicked = false;
		})

	}

	const submitBookForm = () => {
		
		bookForm.addEventListener('submit', (event) => {

			const newBook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookCheckBox.value);

			if (bookCheckBox.checked) {
				newBook.readStatus = true;
			} else newBook.readStatus = false;

			libraryManager.addBookToLibrary(newBook);
			libraryManager.addBookToDisplay(newBook);

			event.preventDefault();
			bookForm.style.visibility = "hidden";
    	bookForm.reset();
    	formBtnClicked = false;
		});
	}

	return {
		initiateBookForm,
		closeBookForm,
		submitBookForm
	}

})();

const libraryManager = (() => {

	let myLibrary = [];

	const addBookToLibrary = (newBook) => {
		libraryManager.myLibrary.push(newBook);
	}

	const addBookToDisplay = (newBook) => {
		const bodyContainer = document.querySelector(".body-container");
		const bookCardContainer = document.createElement('div');
    bookCardContainer.className = "bookCardContainer";
	
    const bookCard = document.createElement('div');
    bookCard.className = "bookCard";
    bookCard.innerHTML = `Title: ${newBook.title}<br/> Author: ${newBook.author}<br/>Pages: ${newBook.pages} <br/><br/>`;

		const cardCheckbox = document.createElement('input');
		cardCheckbox.type = "checkbox";
    if (newBook.readStatus) { 
      cardCheckbox.checked = true
    } else cardCheckbox.check = false;
		cardCheckbox.addEventListener('change', () => {
			if (cardCheckbox.checked) { 
				newBook.readStatus = true;
			} else newBook.readStatus = false;
		})

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "X";
		deleteBtn.addEventListener('click', () => {
			removeBookFromLibrary(newBook);
			removeBookFromDisplay(bookCardContainer);
		})	

		bookCard.append(deleteBtn);
    bookCard.append(cardCheckbox);
    bookCardContainer.append(bookCard);
    bodyContainer.append(bookCardContainer);
  }

	const removeBookFromLibrary = (newBook) => {
		libraryManager.myLibrary = libraryManager.myLibrary.filter(book => book !== newBook);
	}

	const removeBookFromDisplay = (bookCardContainer) => {
		bookCardContainer.remove()
	}
		
	return {
		addBookToLibrary,
		addBookToDisplay,
		removeBookFromLibrary,
		removeBookFromDisplay,
		myLibrary
	}

})();

const appController = (() => {
	bookFormController.initiateBookForm();
	bookFormController.closeBookForm();
	bookFormController.submitBookForm();
})();