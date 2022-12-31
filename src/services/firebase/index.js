// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTxa7nl9o-xfULwZLamY0w6L95Xl3_bL4",
  authDomain: "portfolio-coradello.firebaseapp.com",
  projectId: "portfolio-coradello",
  storageBucket: "portfolio-coradello.appspot.com",
  messagingSenderId: "874047230899",
  appId: "1:874047230899:web:1c2008cdc49b0cd4fbf1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)