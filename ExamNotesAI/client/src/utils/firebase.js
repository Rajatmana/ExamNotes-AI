// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-ed8c2.firebaseapp.com",
  projectId: "authexamnotes-ed8c2",
  storageBucket: "authexamnotes-ed8c2.firebasestorage.app",
  messagingSenderId: "440281269781",
  appId: "1:440281269781:web:d0e2ebad9be5119d7cb01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export{auth, provider}