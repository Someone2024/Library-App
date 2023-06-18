import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./firebaseApp";

const db = getFirestore(app);

export default async function createBook(title, author, pages, read, userId) {
  try {
    const docRef = await addDoc(collection(db, "Books"), {
      title: title,
      author: author,
      pages: pages,
      read: read,
      id: userId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log("Error adding document: ", err);
  }
}

export async function retrieveBooks(currentUserId) {
  const q = query(collection(db, "Books"), where("id", "==", currentUserId));
  const cardsContainer = document.querySelector(".cards-container");

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //take books info from doc.data()

    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const removeBook = document.createElement("button");
    const readStatus = document.createElement("button");

    cardTitle.textContent = '"' + doc.data().title + '"';
    cardAuthor.textContent = doc.data().author;
    cardPages.textContent = doc.data().pages;
    card.append(cardTitle, cardAuthor, cardPages, readStatus,removeBook);

    card.classList.add("card");
    removeBook.textContent = "Remove"

    if (doc.data().read === true) {
      readStatus.textContent = "Read";
    } else readStatus.textContent = "Not read";

    if (readStatus.textContent === "Not read") {
      readStatus.style.backgroundColor = "#ff9c9c";
    } else {
      readStatus.style.backgroundColor = "#9fff9c";
    }

    readStatus.addEventListener("click", () => {
      if (readStatus.textContent === "Not read") {
        readStatus.textContent = "Read";
        readStatus.style.backgroundColor = "#9fff9c";
      } else {
        readStatus.textContent = "Not read";
        readStatus.style.backgroundColor = "#ff9c9c";
      }
    });

    removeBook.addEventListener("click", async () => {
      cardsContainer.removeChild(card);
      await deleteDoc(doc.ref)
    });

    cardsContainer.append(card);
  });
}