import { SignIn, SignOut, auth, user } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";
import {
  newBookEvent,
  deleteNewBookEvent, 
  authErr, 
  userIn, userOut
} from "../App"

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    userIn()
    newBookEvent()
  } else {
    authErr()
    userOut()
    deleteNewBookEvent()
  }
});