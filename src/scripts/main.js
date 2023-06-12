let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);

    this.info = () =>
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read === true ? "Read" : "Not read yet"
      }`;
  }

  getTitle = () => this.title;
  getAuthor = () => this.author;
  getPages = () => this.pages;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary = [newBook];
}

function displayBooks() {
  const cardsContainer = document.querySelector(".cards-container")
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const removeBook = document.createElement("button");
    const readStatus = document.createElement("button");

    cardTitle.textContent = '"' + book.title + '"'; 
    cardAuthor.textContent = book.author; 
    cardPages.textContent = book.pages; 
    card.append(cardTitle, cardAuthor, cardPages);

    removeBook.textContent = "Remove";
    card.appendChild(readStatus);
    card.appendChild(removeBook);
    card.classList.add("card");

    readStatus.classList.add("read")
    removeBook.classList.add("remove")

    if (book.read === true){
      readStatus.textContent = "Read";
    } 
    else readStatus.textContent = "Not read";

    if(readStatus.textContent === "Not read"){
      readStatus.style.backgroundColor = "#ff9c9c";
    }else{
      readStatus.style.backgroundColor = "#9fff9c";
    }
      

    readStatus.addEventListener("click", () => {
      if (readStatus.textContent === "Not read"){
        readStatus.textContent = "Read";
        readStatus.style.backgroundColor = "#9fff9c";
      }
      else {readStatus.textContent = "Not read";
           readStatus.style.backgroundColor = "#ff9c9c";
          }

    });

    removeBook.addEventListener("click", () => {
      cardsContainer.removeChild(card);
      myLibrary.pop(); // <-- This may cause problems
    });

    cardsContainer.append(card);
  });
}

export {
  addBookToLibrary,
  displayBooks
}