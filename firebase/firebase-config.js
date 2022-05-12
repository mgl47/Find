// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmqMZaSHdIIjmTJeECsCk5gs3wa4l7C3I",
  authDomain: "find-299de.firebaseapp.com",
  projectId: "find-299de",
  storageBucket: "find-299de.appspot.com",
  messagingSenderId: "1086373311684",
  appId: "1:1086373311684:web:de175fe8b6b22cc52bc591",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
