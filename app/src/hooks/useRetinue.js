import { useCallback, useEffect, useRef, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { useAuth } from "../contexts/AuthContext.jsx";
import { emptyRetinue } from "../lib/retinue.js";
import { normalizeFighter } from "../lib/fighter.js";

const SAVE_DELAY_MS = 1000;

export function useRetinue(retinueId) {
  const { user } = useAuth();
  const [retinue, setRetinue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState("idle");
  const readyToSaveRef = useRef(false);
  const saveTimerRef = useRef(null);

  useEffect(() => {
    if (!user || !retinueId) return;

    readyToSaveRef.current = false;
    setLoading(true);
    setSaveStatus("idle");

    getDoc(doc(db, "users", user.uid, "retinues", retinueId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          setRetinue({
            ...emptyRetinue(),
            ...data,
            retinueChoices: data.retinueChoices ?? {},
            fighters: (data.fighters ?? []).map(normalizeFighter),
          });
        } else {
          setRetinue(emptyRetinue());
        }
      })
      .finally(() => {
        setLoading(false);
        queueMicrotask(() => {
          readyToSaveRef.current = true;
        });
      });
  }, [user, retinueId]);

  useEffect(() => {
    if (!user || !retinueId || loading || !retinue || !readyToSaveRef.current) return undefined;

    setSaveStatus("saving");
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(async () => {
      try {
        await setDoc(
          doc(db, "users", user.uid, "retinues", retinueId),
          {
            name: retinue.name,
            archetypeId: retinue.archetypeId,
            traditionId: retinue.traditionId,
            retinueChoices: retinue.retinueChoices,
            fighters: retinue.fighters,
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
        setSaveStatus("saved");
      } catch {
        setSaveStatus("error");
      }
    }, SAVE_DELAY_MS);

    return () => clearTimeout(saveTimerRef.current);
  }, [retinue, user, retinueId, loading]);

  const patchRetinue = useCallback((partial) => {
    setRetinue((current) => ({ ...current, ...partial }));
  }, []);

  const setFighters = useCallback((updater) => {
    setRetinue((current) => ({
      ...current,
      fighters: typeof updater === "function" ? updater(current.fighters ?? []) : updater,
    }));
  }, []);

  return {
    retinue,
    loading,
    saveStatus,
    patchRetinue,
    setFighters,
  };
}

function saveStatusLabel(status) {
  if (status === "saving") return "Saving…";
  if (status === "saved") return "Saved";
  if (status === "error") return "Save failed";
  return "";
}

export { saveStatusLabel };
