// like a config file
// importing firebase module
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCr-AjuXJLwefwkwtimfsfMJFJrr2glOS0",
  authDomain: "fb-messenger-clone-405e3.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-405e3.firebaseio.com",
  projectId: "fb-messenger-clone-405e3",
  storageBucket: "fb-messenger-clone-405e3.appspot.com",
  messagingSenderId: "2664215755",
  appId: "1:2664215755:web:583eea5abc0919549ed74e",
  measurementId: "G-ES4MPT63T7",
});

// .firestore() is the database we just created
const db = firebaseApp.firestore();

// now we can use this db variable in any of our files
export default db;
