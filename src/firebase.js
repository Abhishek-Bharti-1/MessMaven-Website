// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6YiV_7Z0WyuYjaRFH6bAX89Ums7ZmVck",
  authDomain: "mess-maven-demo.firebaseapp.com",
  projectId: "mess-maven-demo",
  storageBucket: "mess-maven-demo.appspot.com",
  messagingSenderId: "35464718626",
  appId: "1:35464718626:web:b71b540425a2793cf65d7b",
  measurementId: "G-K6FZ7EPV4T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);