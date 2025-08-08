// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtzyHPUc-P2CJWn1GoIaPIgY4sNTu8uYM",
  authDomain: "foreverfitness-35d69.firebaseapp.com",
  projectId: "foreverfitness-35d69",
  storageBucket: "foreverfitness-35d69.firebasestorage.app",
  messagingSenderId: "341765158224",
  appId: "1:341765158224:web:b024d96d4add6466c4e855",
  measurementId: "G-RRT4XVDCVX"
};

// Initialize Firebase
// console.log("hi");
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export {auth,db};