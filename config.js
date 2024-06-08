import firebase from "firebase";
require("@firebase/firestore");


var firebaseConfig = {
  apiKey: "AIzaSyCGN0qa6gu0xEVyKY4ItwhZMbWr-8frCDc",
  authDomain: "e-ride-46a4e.firebaseapp.com",
  projectId: "e-ride-46a4e",
  storageBucket: "e-ride-46a4e.appspot.com",
  messagingSenderId: "598592373857",
  appId: "1:598592373857:web:e60e519b5b475620055620"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
