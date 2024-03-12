// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4QRzV--2lWa6bv35Otr5QzCXD7LcB2FY",
  authDomain: "gallery-app-5274d.firebaseapp.com",
  projectId: "gallery-app-5274d",
  storageBucket: "gallery-app-5274d.appspot.com",
  messagingSenderId: "917759103752",
  appId: "1:917759103752:web:9f2ed9e619f0496af912bd",
  measurementId: "G-W8BBVQT54H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}