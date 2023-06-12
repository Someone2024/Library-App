import {addBookToLibrary, displayBooks} from "./scripts/main"

const newBook = document.getElementById("new-book");
const bookForm = document.getElementById("book-form");
const addBook = document.getElementById("add-book");
const dialog = document.querySelector(".dialog"); 

const bookFields = {
  title: document.getElementById("title"),
  author: document.getElementById("author"),
  pages: document.getElementById("pages"),
  read: document.getElementById("read"),
};

newBook.addEventListener("click", () => {
  dialog.showModal()
});

addBook.addEventListener("click", () => {
  addBookToLibrary(
    bookFields.title.value,
    bookFields.author.value,
    bookFields.pages.value,
    bookFields.read.checked,
  );

  displayBooks();
  bookForm.reset()

  dialog.close()
})