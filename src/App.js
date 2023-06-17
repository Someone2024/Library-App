import { addBookToLibrary, displayBooks } from "./scripts/main"
import { auth } from "./server/Authentication";
import createBook, { retrieveBooks } from "./server/CloudStore"

const newBook = document.getElementById("new-book");
const bookForm = document.getElementById("book-form");
const addBook = document.getElementById("add-book");
const dialog = document.querySelector(".dialog");

const ProfilePic = document.querySelector(".profile")

const LoginButton = document.querySelector(".login");

const LogOutButton = document.querySelector(".logout");

const AuthErr = document.querySelector(".authErr");
const CloseErr = document.querySelector(".closeErr");

const bookFields = {
  title: document.getElementById("title"),
  author: document.getElementById("author"),
  pages: document.getElementById("pages"),
  read: document.getElementById("read"),
};

function showModal() {
  dialog.showModal()
}

function newBookEvent() {
  newBook.addEventListener("click", showModal)
}

function deleteNewBookEvent() {
  newBook.removeEventListener("click", showModal)
}

function showAuthErr() {
  AuthErr.showModal()
}

function closeAuthErr() {
  AuthErr.close()
}

function authErr() {
  newBook.addEventListener("click", showAuthErr)
  CloseErr.addEventListener("click", closeAuthErr)
}

export {
  ProfilePic,
  LoginButton,
  LogOutButton,
  newBookEvent,
  deleteNewBookEvent,
  authErr,
}