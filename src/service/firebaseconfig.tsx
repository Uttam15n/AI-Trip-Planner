// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq60O5CEtlyuZk5l782p8CRwHn9mrTO3k",
  authDomain: "ai-travel-planner-01-fdee0.firebaseapp.com",
  projectId: "ai-travel-planner-01-fdee0",
  storageBucket: "ai-travel-planner-01-fdee0.firebasestorage.app",
  messagingSenderId: "90862189759",
  appId: "1:90862189759:web:2053f27a24a1a2617c9a0a",
  measurementId: "G-EBVXNZWYKF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);