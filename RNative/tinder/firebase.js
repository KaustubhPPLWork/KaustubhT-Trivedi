// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANl29xz-K84-miMJoN5xdDSjjW9RsDwL4",
    authDomain: "tinder-615a4.firebaseapp.com",
    projectId: "tinder-615a4",
    storageBucket: "tinder-615a4.appspot.com",
    messagingSenderId: "35429041629",
    appId: "1:35429041629:web:75d3296c033028a2fde234"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()
export { auth, db }