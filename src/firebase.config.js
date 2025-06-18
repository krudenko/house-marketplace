import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4irZ_aKKeKVU8eRxpbeETQzXaxbeeIGo",
  authDomain: "house-marketplace-app-3ebd0.firebaseapp.com",
  projectId: "house-marketplace-app-3ebd0",
  storageBucket: "house-marketplace-app-3ebd0.firebasestorage.app",
  messagingSenderId: "431308835797",
  appId: "1:431308835797:web:c7c49c51522d7dd1ac0b5c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()