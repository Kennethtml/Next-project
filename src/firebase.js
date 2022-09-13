import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZQYiMJrge1ZClMzj0NpMr2v0m6Wj17dw",
  authDomain: "next-app-8471f.firebaseapp.com",
  projectId: "next-app-8471f",
  storageBucket: "next-app-8471f.appspot.com",
  messagingSenderId: "317888233337",
  appId: "1:317888233337:web:d366891b8954ba9d63b9a8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const createUserwithAuth = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const authEventListener = async (callback) => {
  const res = onAuthStateChanged(auth, callback);
};

export const signUserOut = () => signOut(auth);

//authentication with google auth provider

const provider = new GoogleAuthProvider();

export const signInwithGoogleProvider = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error);
    });
