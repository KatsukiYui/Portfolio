// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6qPUVfHJEiSjDdzo4xLSZVj0zlvwOmoc",
    authDomain: "projectsdb-812e8.firebaseapp.com",
    projectId: "projectsdb-812e8",
    storageBucket: "projectsdb-812e8.appspot.com",
    messagingSenderId: "862362680861",
    appId: "1:862362680861:web:580b835aa074918e40d0f4",
    measurementId: "G-QVF26L950V"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
export { db };