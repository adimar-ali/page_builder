

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyRifwlvbCsoBOHUnPVKx4D_8QI_ymh5Q",
  authDomain: "pagebuilder-96160.firebaseapp.com",
  projectId: "pagebuilder-96160",
  storageBucket: "pagebuilder-96160.appspot.com",
  messagingSenderId: "112597343010",
  appId: "1:112597343010:web:828875b9926ea35352637b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)