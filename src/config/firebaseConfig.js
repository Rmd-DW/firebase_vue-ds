// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhZVUIO6Gs2tx8Jdck8VskMpR6_4YiKA",
  authDomain: "fireinit-810a5.firebaseapp.com",
  projectId: "fireinit-810a5",
  storageBucket: "fireinit-810a5.appspot.com",
  messagingSenderId: "225202895445",
  appId: "1:225202895445:web:9206deab8a801aa3bab2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};