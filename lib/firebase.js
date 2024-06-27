// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmKyXdukf8F12kTrsKxV2hir392bOSm9Y",
  authDomain: "firechat-ff1ae.firebaseapp.com",
  projectId: "firechat-ff1ae",
  storageBucket: "firechat-ff1ae.appspot.com",
  messagingSenderId: "964382723129",
  appId: "1:964382723129:web:371789ca142bc106b751e8",
  measurementId: "G-1VE3ESFK4X",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
