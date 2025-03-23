import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIRE_BASE_KEY,
    authDomain: process.env.FIRE_BASE_DOMAIN,
    projectId: process.env.FIRE_BASE_PROJECT_ID ,
    storageBucket: process.env.FIRE_BASE_BUCKET,
    messagingSenderId: process.env.FIRE_BASE_SENDER_ID,
    appId: process.env.FIRE_BASE_APP_ID,
    measurementId: process.env.FIRE_BASE_MEASUREMENT_ID
  };

 export default firebase.initializeApp(firebaseConfig)

 
