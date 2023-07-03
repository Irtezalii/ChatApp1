import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc0bRF62UTJXrIawzcLh5vSiP0StBWdeM",
    authDomain: "fourth-arena-334310.firebaseapp.com",
    databaseURL: "https://fourth-arena-334310-default-rtdb.firebaseio.com",
    projectId: "fourth-arena-334310",
    storageBucket: "fourth-arena-334310.appspot.com",
    messagingSenderId: "881719902289",
    appId: "1:881719902289:web:304b139e02c16d69b23870",
    measurementId: "G-7V1ZJPXF2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);