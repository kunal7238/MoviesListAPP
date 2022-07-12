// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIdUbvVaUgCC-C87zyw4gQOP5ZcKyo1HU",
  authDomain: "moviesapp-65eef.firebaseapp.com",
  projectId: "moviesapp-65eef",
  storageBucket: "moviesapp-65eef.appspot.com",
  messagingSenderId: "679644504327",
  appId: "1:679644504327:web:61e71c18082c83665e65a2",
  measurementId: "G-SKHC6JNW87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1hz64PAdRdLQcYH3dQEZDPENGCDRGKLI",
//   authDomain: "loginsignup-c28c4.firebaseapp.com",
//   projectId: "loginsignup-c28c4",
//   storageBucket: "loginsignup-c28c4.appspot.com",
//   messagingSenderId: "238553421599",
//   appId: "1:238553421599:web:6bd46ba740969fd831c22a",
//   measurementId: "G-PPPELBYV11"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;
