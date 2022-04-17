import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVcqtvKQVdwEGXUAZ8pzHo2F00GTNpcfg",
  authDomain: "reactnativewhatsapp-3dece.firebaseapp.com",
  projectId: "reactnativewhatsapp-3dece",
  storageBucket: "reactnativewhatsapp-3dece.appspot.com",
  messagingSenderId: "409900819577",
  appId: "1:409900819577:web:e2cbd33961b7b3713820a8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
