// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAl-T-Q9dX-YoES9YAlcJzBGpc3igSk1Bc",
  authDomain: "prepwise-33ec4.firebaseapp.com",
  projectId: "prepwise-33ec4",
  storageBucket: "prepwise-33ec4.firebasestorage.app",
  messagingSenderId: "962102685290",
  appId: "1:962102685290:web:51c934030f5cc3af0ea413",
  measurementId: "G-ZG9MT4Q6V4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);