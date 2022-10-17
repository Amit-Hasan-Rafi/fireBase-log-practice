// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxpvbVsKIOyvh9eHhaxuNmweR6qB0Vo4k",
  authDomain: "singup-12c00.firebaseapp.com",
  projectId: "singup-12c00",
  storageBucket: "singup-12c00.appspot.com",
  messagingSenderId: "964517604080",
  appId: "1:964517604080:web:22b178765f06134195f035",
  measurementId: "G-T0X1K6E6X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app