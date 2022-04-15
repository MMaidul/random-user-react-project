// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCnKyjW4gW04afxZe32QEwm6XMiJHsfmA",
    authDomain: "conceptual-project-94f35.firebaseapp.com",
    projectId: "conceptual-project-94f35",
    storageBucket: "conceptual-project-94f35.appspot.com",
    messagingSenderId: "480624369932",
    appId: "1:480624369932:web:b9d4f33067069f1ac4e929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;