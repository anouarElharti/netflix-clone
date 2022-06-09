// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt7fjrLhpD0SBu-sh8brQKVfKx_d1VdTw",
  authDomain: "netflix-clone-32eab.firebaseapp.com",
  projectId: "netflix-clone-32eab",
  storageBucket: "netflix-clone-32eab.appspot.com",
  messagingSenderId: "591663256372",
  appId: "1:591663256372:web:ce33ad0dbbcc0b75508b61",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
export const db = getFirestore(app);
