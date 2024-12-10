// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkPVJhCNk014j049dCJWiR7ZcDGgo_mOw",
    authDomain: "dreabit-6a31c.firebaseapp.com",
    projectId: "dreabit-6a31c",
    storageBucket: "dreabit-6a31c.firebasestorage.app",
    messagingSenderId: "289526293208",
    appId: "1:289526293208:web:882821511c69bda9836dad"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;