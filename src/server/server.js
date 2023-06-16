import { SignIn, SignOut, auth, user } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";
import {ProfilePic, LoginButton, LogOutButton} from "../App"
import createBook, {retrieveBooks} from  "./CloudStore"

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    LoginButton.style.display = "none"
    LogOutButton.style.display = "block"
    ProfilePic.style.display = "inline"
    ProfilePic.src= user.photoURL
  } else {
    // User is signed out
    // ...
    LogOutButton.style.display = "none"
    ProfilePic.style.display = "none"
    LoginButton.style.display = "block"
  }
});
