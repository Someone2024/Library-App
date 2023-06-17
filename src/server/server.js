import { SignIn, SignOut, auth, user } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";
import {
  ProfilePic, LoginButton, LogOutButton,
  newBookEvent,
  deleteNewBookEvent, 
  authErr,
  deleteAuthErrEvent
} from "../App"

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    LoginButton.style.display = "none"
    ProfilePic.style.display = "inline"
    LogOutButton.style.display = "block"
    ProfilePic.src = user.photoURL
    newBookEvent()
    deleteAuthErrEvent()
  } else {
    // User is signed out
    // ...
    authErr()
    LogOutButton.style.display = "none"
    ProfilePic.style.display = "none"
    LoginButton.style.display = "block"
    deleteNewBookEvent()
  }
});
