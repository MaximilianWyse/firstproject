// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBTOqJrFG3TEnOQK7Ex0V1-nF4UvlmhV8",
  authDomain: "firstproject-11dce.firebaseapp.com",
  projectId: "firstproject-11dce",
  storageBucket: "firstproject-11dce.firebasestorage.app",
  messagingSenderId: "613393177238",
  appId: "1:613393177238:web:58f6b05167d1f3621d00b7",
  measurementId: "G-03F7TTZEC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);