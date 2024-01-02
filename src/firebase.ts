// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrJSS9EeRted1cGLegiN1Jr05DxKFwv8Y",
  authDomain: "remind-560ac.firebaseapp.com",
  databaseURL: "https://remind-560ac.firebaseio.com",
  projectId: "remind-560ac",
  storageBucket: "remind-560ac.appspot.com",
  messagingSenderId: "702754798149",
  appId: "1:702754798149:web:df6c9656b8bea20e99812c",
  measurementId: "G-TSQRSBVTRF",
};

// Initialize Firebase

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth , provider};
