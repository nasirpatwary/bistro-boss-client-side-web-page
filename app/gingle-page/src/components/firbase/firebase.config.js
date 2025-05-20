import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMd8lQ9bEm9Encyc8fz2wTYmmUJrtSA1A",
  authDomain: "films-tv-9f8eb.firebaseapp.com",
  projectId: "films-tv-9f8eb",
  storageBucket: "films-tv-9f8eb.firebasestorage.app",
  messagingSenderId: "760395178486",
  appId: "1:760395178486:web:5b881503690f4ec7fae7d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
