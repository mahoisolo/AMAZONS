// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFoTNi1Mt5dtTKNnKcc8We8o0o6SCcXn8",
  authDomain: "clone-af08c.firebaseapp.com",
  projectId: "clone-af08c",
  storageBucket: "clone-af08c.appspot.com",
  messagingSenderId: "339840209930",
  appId: "1:339840209930:web:44454410c8b85a10c9fbf3",
  measurementId: "G-YWBCLJ5DS7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore(); // Initialize Firestore

export { auth, db };
