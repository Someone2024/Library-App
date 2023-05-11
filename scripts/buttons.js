const newBook = document.getElementById("new-book");
const bookForm = document.getElementById("book-form");
const addBook = document.getElementById("add-book");

const bookFields = {
  title: document.getElementById("title"),
  author: document.getElementById("author"),
  pages: document.getElementById("pages"),
  read: document.getElementById("read"),
};

bookForm.style.display = "none";

newBook.addEventListener("click", () => {
  {
    bookForm.style.display === "none"
      ? (bookForm.style.display = "block")
      : (bookForm.style.display = "none");
  }
});

addBook.addEventListener("click", () => {
  addBookToLibrary(
    bookFields.title.value,
    bookFields.author.value,
    bookFields.pages.value,
    bookFields.read.checked,
  );

  displayBooks();

  bookForm.style.display = "none"
});