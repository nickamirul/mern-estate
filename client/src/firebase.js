// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ae1e9.firebaseapp.com",
  projectId: "mern-estate-ae1e9",
  storageBucket: "mern-estate-ae1e9.appspot.com",
  messagingSenderId: "589129740434",
  appId: "1:589129740434:web:8a35f4a862ac221580764b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);