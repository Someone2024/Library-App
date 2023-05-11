let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);

    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "Read" : "Not read yet"}`;
}

function addBookToLibrary(
  title = "elpe",
  author = "si",
  pages = 12,
  read = false
) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("elpep", "ete", 12, false);

function displayBooks() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.textContent = book.info();
    console.log(book.info())
    document.body.append(card)
  });
}