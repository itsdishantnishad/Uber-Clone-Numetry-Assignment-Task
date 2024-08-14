// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-lPBxi0m0B-TQjinsCBZKssBzcEdiaTc",
  authDomain: "uberclone-2fe91.firebaseapp.com",
  databaseURL: "https://uberclone-2fe91-default-rtdb.firebaseio.com/",
  projectId: "uberclone-2fe91",
  storageBucket: "uberclone-2fe91.appspot.com",
  messagingSenderId: "361195180540",
  appId: "1:361195180540:web:da507fb54dc6f55203a279",
  measurementId: "G-KT618B2CD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);