
import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpr87UdOdi4MRZFaqjlTW-lQeL6hegWn4",
  authDomain: "workout-with-arif.firebaseapp.com",
  projectId: "workout-with-arif",
  storageBucket: "workout-with-arif.appspot.com",
  messagingSenderId: "279702546937",
  appId: "1:279702546937:web:fac65530afa742456b3528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;