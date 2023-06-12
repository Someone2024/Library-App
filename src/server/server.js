import { SignIn, SignOut } from "./Authentication";
import { onAuthStateChanged } from "firebase/auth";

const LoginButton = document.querySelector(".login");

LoginButton.addEventListener("click", ()=> {
    SignIn()
})