import { SignIn, SignOut, auth, user } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";
import {
  newBookEvent,
  deleteNewBookEvent, 
  authErr,
  userIn, userOut,
  deleteAuthErrEvent,
  LoginButton,
  LogOutButton,
  createBooks
  
} from "../App"
import { retrieveBooks } from "./CloudStore";

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    userIn()
    newBookEvent()
    createBooks()
    retrieveBooks(auth.currentUser.uid)
    deleteAuthErrEvent()
  } else {
    authErr()
    userOut()
    deleteNewBookEvent()
  }
});