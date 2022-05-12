// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
