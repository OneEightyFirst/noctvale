import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase.js";
import { getAuthErrorMessage } from "../lib/authErrors.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  async function signInWithGoogle() {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  }

  async function signInWithEmail(email, password) {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setError(getAuthErrorMessage(err));
      throw err;
    }
  }

  async function signUpWithEmail(email, password) {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setError(getAuthErrorMessage(err));
      throw err;
    }
  }

  async function resetPassword(email) {
    setError("");
    try {
      await sendPasswordResetEmail(auth, email.trim());
    } catch (err) {
      setError(getAuthErrorMessage(err));
      throw err;
    }
  }

  async function signOutUser() {
    setError("");
    await signOut(auth);
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      setError,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      resetPassword,
      signOut: signOutUser,
    }),
    [user, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
