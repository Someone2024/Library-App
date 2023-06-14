import { SignIn, SignOut, auth } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";

const LoginButton = document.querySelector(".login");

const LogOutButton = document.querySelector(".logout");
const Profile = document.querySelector(".profile");

LoginButton.addEventListener("click", () => SignIn())
LogOutButton.addEventListener("click", () => SignOut())

onAuthStateChanged(auth, (user) => {
  if(user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    LogOutButton.style.display = "block"
    Profile.style.display = "block"
    Profile.src = "set user profile pic here"
    LoginButton.style.display = "none"
    // ...
  } else {
    // User is signed out
    // ...
    LogOutButton.style.display = "none"
    Profile.style.display = "block"
    LoginButton.style.display = "block"
  }
});
