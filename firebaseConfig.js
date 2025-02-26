// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, GeoPoint, Timestamp, collection, addDoc, getDocs, updateDoc, doc, setDoc, getDoc, query, where } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "<API KEY?",
//   authDomain: "wastewise-f37f3.firebaseapp.com",
//   projectId: "wastewise-f37f3",
//   storageBucket: "wastewise-f37f3.appspot.com",
//   messagingSenderId: "629664245072",
//   appId: "1:629664245072:web:7b1081b88055bad825b855",
//   measurementId: "G-NTM8XBDBT3"
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<API KEY>",
  authDomain: "<authDomain>",
  projectId: "trashtrek-ef9e1",
  storageBucket: "trashtrek-ef9e1.firebasestorage.app",
  messagingSenderId: "52883549830",
  appId: "1:52883549830:web:085687739f1e3db23beb07"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firestore
const FIRESTORE_DB = getFirestore(FIREBASE_APP);


// Initialize Firebase Auth
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firebase Storage
const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, GeoPoint, Timestamp, collection, addDoc, getDocs, updateDoc, setDoc, doc, getDoc, query, where, FIREBASE_STORAGE };
