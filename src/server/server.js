import { SignIn, SignOut, auth, user } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";
import {
  newBookEvent,
  deleteNewBookEvent, 
  
} from "../App"

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    userIn()
    newBookEvent()
    deleteAuthErrEvent()
  } else {
    authErr()
    userOut()
    deleteNewBookEvent()
  }
});