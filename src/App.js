import { auth } from "./server/Authentication";
import createBook, { retrieveBooks } from "./server/CloudStore"
import "./css/styles.css"
import "./css/Form.css"

const newBook = document.getElementById("new-book");
const addBook = document.getElementById("add-book");
const dialog = document.querySelector(".dialog");
const Form = document.querySelector("#book-form");
const cardsContainer = document.querySelector(".cards-container");

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

function userIn() {
  LoginButton.style.display = "none"
  ProfilePic.style.display = "inline"
  LogOutButton.style.display = "block"
  ProfilePic.src = auth.currentUser.photoURL
}

function userOut(){
  LogOutButton.style.display = "none"
  ProfilePic.style.display = "none"
  LoginButton.style.display = "block"
  cardsContainer.innerHTML = ""
}

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
  AuthErr.style.display = "flex"
}

function closeAuthErr() {
  AuthErr.close()
  AuthErr.style.display = "none"
}

function authErr() {
  newBook.addEventListener("click", showAuthErr)
  CloseErr.addEventListener("click", closeAuthErr)
}

function deleteAuthErrEvent() {
  newBook.removeEventListener("click", showAuthErr)
}

function createBooks() {
  addBook.addEventListener("click",()=> {
    createBook(
      bookFields.title.value,
      bookFields.author.value,
      bookFields.pages.value,
      bookFields.read.checked,
      auth.currentUser.uid
    )
    dialog.close()
    Form.reset()
  })

}

export {
  LogOutButton,
  LoginButton,
  newBookEvent,
  deleteNewBookEvent,
  authErr,
  userOut, userIn,
  deleteAuthErrEvent,
  createBooks
}