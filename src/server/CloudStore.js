import {getFirestore,collection, query, where, getDocs } from "firebase/firestore"
import app from "./firebaseApp"

const db = getFirestore(app)

export default async function createBook(title, author, pages, read, userId) {
  try {
    const docRef = await addDoc(collection(db, "Books"), {
      title: title,
      author: author,
      pages: pages,
      read: read,
      id: userId
    });
    alert("Document written with ID: ", docRef.id);
  } catch(e) {
    alert("Error adding document: ", e);
  }
}

export async function retrieveBooks(currentUserId) {
  
const q = query(collection(db, "Books"), where("id", "==", currentUserId));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //take books info from doc.data()
  alert(doc.data().title)
});
}