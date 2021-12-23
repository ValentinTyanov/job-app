// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAuLQFNPbFzfoo1WIJv4Htyjj38L7MWuuM",

  authDomain: "seeker-d45b3.firebaseapp.com",

  databaseURL:
    "https://seeker-d45b3-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "seeker-d45b3",

  storageBucket: "seeker-d45b3.appspot.com",

  messagingSenderId: "1043661392553",

  appId: "1:1043661392553:web:27c8c0858a66f0071fb7b8",

  measurementId: "G-GYJ2V4XRCB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
