// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-05vA4bSRAtbSPvcL8K1FymWT1QrHHvA",
  authDomain: "gomatsuri.firebaseapp.com",
  databaseURL:
    "https://gomatsuri-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gomatsuri",
  storageBucket: "gomatsuri.appspot.com",
  messagingSenderId: "488161588646",
  appId: "1:488161588646:web:6c38f59a6973833523cb67",
  measurementId: "G-GCW16SNKBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };
