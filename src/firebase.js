import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyBZQYiMJrge1ZClMzj0NpMr2v0m6Wj17dw",
  authDomain: "next-app-8471f.firebaseapp.com",
  projectId: "next-app-8471f",
  storageBucket: "next-app-8471f.appspot.com",
  messagingSenderId: "317888233337",
  appId: "1:317888233337:web:d366891b8954ba9d63b9a8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//create new user with email sign in
export const createUserwithAuth =  (email, password) => {
 return createUserWithEmailAndPassword(auth, email, password)
   
};




//observe auth state change
export const authEventListener = (callback) => {
   onAuthStateChanged(auth, callback);
};

export const signUserOut = () => signOut(auth);

//authentication with google auth provider

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInwithGoogleProvider = () => signInWithPopup(auth, provider)

export const signInUser = (email, password) => signInWithEmailAndPassword(auth,email,password)
export const resetUserPassword=(email)=>sendPasswordResetEmail(auth,email)