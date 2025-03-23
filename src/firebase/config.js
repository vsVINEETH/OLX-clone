import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGe6LtOtE9QMQDmU-EbdWXAYT9rtZe1oI",
    authDomain: "olx-clone-d8999.firebaseapp.com",
    projectId: "olx-clone-d8999",
    storageBucket: "olx-clone-d8999.appspot.com",
    messagingSenderId: "482887308212",
    appId: "1:482887308212:web:8a55386c0c99d6d77e58e1",
    measurementId: "G-BNXYM53E1L"
  };

 export default firebase.initializeApp(firebaseConfig)

 