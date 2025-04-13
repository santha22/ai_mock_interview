// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-QI4iNoniOG_enM4nELs7eKPP3_cDt1g",
  authDomain: "prepwise-50784.firebaseapp.com",
  projectId: "prepwise-50784",
  storageBucket: "prepwise-50784.firebasestorage.app",
  messagingSenderId: "388683439063",
  appId: "1:388683439063:web:aae333e4d6165037b30992",
  measurementId: "G-2ZTLS97DSH"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);