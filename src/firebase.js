// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBbwqgMxsH1-bZbeiqHgTDb6GSVbmbJ9k0",
  authDomain: "clone-a4ae7.firebaseapp.com",
  projectId: "clone-a4ae7",
  storageBucket: "clone-a4ae7.appspot.com",
  messagingSenderId: "654747054106",
  appId: "1:654747054106:web:6899897a47a957e6ee61a3",
  measurementId: "G-8WGVNSD8D9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };