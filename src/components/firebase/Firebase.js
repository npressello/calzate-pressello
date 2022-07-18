// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4g1cZXiXEQNk_mw3dB0RPWl1ufD2WqpU",
  authDomain: "calzate-coderhouse.firebaseapp.com",
  projectId: "calzate-coderhouse",
  storageBucket: "calzate-coderhouse.appspot.com",
  messagingSenderId: "539618111676",
  appId: "1:539618111676:web:840994e1eea1d491e160b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);