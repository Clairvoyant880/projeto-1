import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDCWNrmC8eSVKnk9_drQOzqpqES3EHw1Uo",
  authDomain: "aprendendo-firebase-16249.firebaseapp.com",
  databaseURL: "https://aprendendo-firebase-16249-default-rtdb.firebaseio.com",
  projectId: "aprendendo-firebase-16249",
  storageBucket: "aprendendo-firebase-16249.appspot.com",
  messagingSenderId: "678073227794",
  appId: "1:678073227794:web:f35e0a214d9ccea15696cb",
  measurementId: "G-53XXDGSPQ8"
};
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase
  