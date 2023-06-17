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