import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

function requireConfig(value, key) {
  if (!value) {
    throw new Error(`Missing ${key}. Add Firebase web app config to .env.local (see .env.example).`);
  }
  return value;
}

const app = initializeApp({
  apiKey: requireConfig(firebaseConfig.apiKey, "VITE_FIREBASE_API_KEY"),
  authDomain: requireConfig(firebaseConfig.authDomain, "VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: requireConfig(firebaseConfig.projectId, "VITE_FIREBASE_PROJECT_ID"),
  storageBucket: requireConfig(firebaseConfig.storageBucket, "VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireConfig(firebaseConfig.messagingSenderId, "VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireConfig(firebaseConfig.appId, "VITE_FIREBASE_APP_ID"),
});

export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
