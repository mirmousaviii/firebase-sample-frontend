import firebase from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = firebase.auth(app);
export const db = firebase.firestore(app);
// firebase.firestore.setLogLevel("debug");
