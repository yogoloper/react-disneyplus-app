// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNNGik8OUl349sZnkrasBXVbmyPiRBDAM",
  authDomain: "react-disney-minus-app.firebaseapp.com",
  projectId: "react-disney-minus-app",
  storageBucket: "react-disney-minus-app.appspot.com",
  messagingSenderId: "794231337359",
  appId: "1:794231337359:web:2354b65c58bc28f6479bfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;