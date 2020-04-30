// import firebase from 'firebase';
import  firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';

//configuration settings from firebase console for the firebase project
const firebaseConfig= firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });

  //initializing firebase
  // const firebaseSetting= firebase.inititalizeApp(config);
  console.log(firebaseConfig);
// const dbRef = firebase.database().ref();
// const usersRef = dbRef.child('users');
//const database = firebase.database();

  //exporting 
  export default firebaseConfig;

  //Resource: Firebase docs 
  //https://firebase.google.com/docs
  //https://firebase.google.com/docs/reference/js/firebase#initializeapp