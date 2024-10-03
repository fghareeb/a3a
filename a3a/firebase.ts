// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuXlcrum_JFkBg-PCFybxGhtxM1KvkRs",
  authDomain: "a3a-test.firebaseapp.com",
  projectId: "a3a-test",
  storageBucket: "a3a-test.appspot.com",
  messagingSenderId: "659802263062",
  appId: "1:659802263062:web:3201d52d5d031dfdc7af37",
  measurementId: "G-3HXSDFR6S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export the storage instance for use in your app
export { storage };      