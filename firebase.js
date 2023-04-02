import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCoClZsfzXLg2Uw8STCoWgLTpquYrzRHvM",
    authDomain: "facebook-clone-37f7d.firebaseapp.com",
    projectId: "facebook-clone-37f7d",
    storageBucket: "facebook-clone-37f7d.appspot.com",
    messagingSenderId: "643218314511",
    appId: "1:643218314511:web:6f68973687227b9257da7a",
    measurementId: "G-K9P6HFJ3ZT"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = firebase.firestore()
  const storage = firebase.storage()

  export {db, storage}