import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { useAuth } from "../contexts/AuthContext.jsx";
import { emptyRetinue } from "../lib/retinue.js";

export function useRetinues() {
  const { user } = useAuth();
  const [retinues, setRetinues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      setRetinues([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const ref = query(
      collection(db, "users", user.uid, "retinues"),
      orderBy("updatedAt", "desc"),
    );

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setRetinues(
          snapshot.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: docSnap.id,
              name: data.name,
              archetypeId: data.archetypeId,
              fighterCount: data.fighters?.length ?? 0,
              updatedAt: data.updatedAt,
            };
          }),
        );
        setLoading(false);
        setError("");
      },
      (err) => {
        setError(err.message ?? "Could not load retinues.");
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [user]);

  async function createRetinue() {
    if (!user) return null;
    const docRef = await addDoc(collection(db, "users", user.uid, "retinues"), {
      ...emptyRetinue(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  }

  async function deleteRetinue(retinueId) {
    if (!user || !retinueId) return;
    try {
      await deleteDoc(doc(db, "users", user.uid, "retinues", retinueId));
      setError("");
    } catch (err) {
      setError(err.message ?? "Could not delete retinue.");
      throw err;
    }
  }

  return { retinues, loading, error, createRetinue, deleteRetinue };
}
