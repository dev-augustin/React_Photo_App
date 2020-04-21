// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firebase-auth'

//configuration settings from firebase console for the firebase project
const firebaseSetting= firebase.initializeApp({
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
  console.log(firebaseSetting.name);
  //exporting 
  export default firebaseSetting;

  //Resource: Firebase docs 
  //https://firebase.google.com/docs
  //https://firebase.google.com/docs/reference/js/firebase#initializeapp