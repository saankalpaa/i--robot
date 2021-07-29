import firebase from "firebase";
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyA9qPHyth09FWHbdugM3poamDgn8kIs_78",
    authDomain: "irobot-f90a6.firebaseapp.com",
    projectId: "irobot-f90a6",
    storageBucket: "irobot-f90a6.appspot.com",
    messagingSenderId: "956954550315",
    appId: "1:956954550315:web:d18787f2d9ed0d11594a6e",
    measurementId: "G-H678D1JBEV"
  };

  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
  firebase.analytics();

  export default db;