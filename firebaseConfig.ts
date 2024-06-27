// firebaseConfig.ts
import firebase from 'firebase/compat/app';

import "firebase/compat/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyAmKyXdukf8F12kTrsKxV2hir392bOSm9Y",
  authDomain: "firechat-ff1ae.firebaseapp.com",
  projectId: "firechat-ff1ae",
  storageBucket: "firechat-ff1ae.appspot.com",
  messagingSenderId: "964382723129",
  appId: "1:964382723129:web:371789ca142bc106b751e8",
  measurementId: "G-1VE3ESFK4X",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

export default firebase;