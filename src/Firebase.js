import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCCTa2pc7o8gNQHxADkS1kqk51TT3LXCBs",
    authDomain: "facebook-messenger-clone-2f8f4.firebaseapp.com",
    projectId: "facebook-messenger-clone-2f8f4",
    storageBucket: "facebook-messenger-clone-2f8f4.appspot.com",
    messagingSenderId: "240295659184",
    appId: "1:240295659184:web:977ffd4a80ba0153e91d75",
    measurementId: "G-LFR24VY5L3"
  });

const db = firebaseApp.firestore();

export default db;

