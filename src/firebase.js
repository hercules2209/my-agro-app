import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArmxFwn3T2FGtMzyr065oF4MfehjVrTLw",
  authDomain: "diseasedet.firebaseapp.com",
  projectId: "diseasedet",
  storageBucket: "diseasedet.appspot.com",
  messagingSenderId: "1062062460810",
  appId: "1:1062062460810:web:9b5a32738898c080f90273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export { app, auth }

