import 'firebase/compat/storage';
import 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBqWRhxnpYxB3gPuc6Ya_9QQBiFKLsK8qs',
  authDomain: 'firegram-gallery-803d6.firebaseapp.com',
  projectId: 'firegram-gallery-803d6',
  storageBucket: 'firegram-gallery-803d6.appspot.com',
  messagingSenderId: '581437279495',
  appId: '1:581437279495:web:bb9bfc71f1b26464b089a2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
