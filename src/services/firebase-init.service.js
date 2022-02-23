// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDfy5EkxDm9onbEly-rzlKcEy0nFtDkk0",
  authDomain: "portfolio-fe567.firebaseapp.com",
  databaseURL: "https://portfolio-fe567-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-fe567",
  storageBucket: "portfolio-fe567.appspot.com",
  messagingSenderId: "1080222015556",
  appId: "1:1080222015556:web:ab6125af5b6fca3c1c5c11",
  measurementId: "G-92LXS20YNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;