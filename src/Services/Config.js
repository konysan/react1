import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ropa-x.firebaseapp.com",
  projectId: "ropa-x",
  storageBucket: "ropa-x.appspot.com",
  messagingSenderId: "231250885330",
  appId: "1:231250885330:web:8e9024628a6b185aa74b0b"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)


