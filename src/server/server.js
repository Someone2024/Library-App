import { SignIn, SignOut, auth } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";

const LoginButton = document.querySelector(".login");

const LogOutButton = document.querySelector(".logout");

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    LogOutButton.style.display = "block"
    LoginButton.style.display = "none"
    // ...
  } else {
    // User is signed out
    // ...
    LogOutButton.style.display = "none"
    LoginButton.style.display = "block"
  }
});
