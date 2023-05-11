let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);

  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read === true ? "Read" : "Not read yet"
    }`;
}

function addBookToLibrary(
  title = "elpe",
  author = "si",
  pages = 12,
  read = false
) {
  const newBook = new Book(title, author, pages, read);
  myLibrary = [newBook];
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const removeBook = document.createElement("button");
    const readStatus = document.createElement("button");

    removeBook.textContent = "Remove";
    card.textContent = book.info();
    card.appendChild(readStatus);
    card.appendChild(removeBook);

    if(book.read === true) readStatus.textContent = "Read"
        else readStatus.textContent = "Not read"

    readStatus.addEventListener("click", ()=>{
        if(readStatus.textContent === "Not read") readStatus.textContent = "Read"
        else readStatus.textContent = "Not read"
    });

    removeBook.addEventListener("click", () => {
      document.body.removeChild(card);
      myLibrary.pop(); // <-- This may cause problems
    });
    
    document.body.append(card);
  });
}
