import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_NG__DcKEUVCLncRwP2In09xdn5-TOzE",
    authDomain: "react-firebase-3ee7d.firebaseapp.com",
    projectId: "react-firebase-3ee7d",
    storageBucket: "react-firebase-3ee7d.appspot.com",
    messagingSenderId: "486037999860",
    appId: "1:486037999860:web:db96ffb157897b7c700ea1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
