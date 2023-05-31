// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEEypZuSiLLtky6tlh7RQxeKO5Mfp41rI",
  authDomain: "image-8f488.firebaseapp.com",
  projectId: "image-8f488",
  storageBucket: "image-8f488.appspot.com",
  messagingSenderId: "855981337056",
  appId: "1:855981337056:web:0bf7715e86058af4786385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
export const API_TOKEN = "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";