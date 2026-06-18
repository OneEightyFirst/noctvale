import React, { useCallback, useMemo } from "react";
import { Plus, X } from "lucide-react";
import { ARCHETYPES } from "../data/noctvale.js";
import { useRegisterSidebar } from "../contexts/SideNavContext.jsx";
import { useRetinues } from "../hooks/useRetinues.js";
import { formatRetinueSummary } from "../lib/retinue.js";
import SplashScreen from "./SplashScreen.jsx";

export default function RetinueLibrary({ onOpenRetinue }) {
  const { retinues, loading, error, createRetinue, deleteRetinue } = useRetinues();

  const handleCreate = useCallback(async () => {
    const id = await createRetinue();
    if (id) onOpenRetinue(id, { editing: true });
  }, [createRetinue, onOpenRetinue]);

  async function handleDelete(event, retinueId) {
    event.stopPropagation();
    try {
      await deleteRetinue(retinueId);
    } catch (err) {
      console.error(err);
    }
  }

  const sidebar = useMemo(
    () => (
      <div className="space-y-4">
        <h1 className="text-lg font-semibold tracking-wide text-cream-100">Your Retinues</h1>
        <button
          type="button"
          onClick={handleCreate}
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded border border-accent-500/40 bg-accent-500/10 px-3 py-2 text-sm text-accent-100 hover:border-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add retinue
        </button>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>
    ),
    [error, handleCreate, loading],
  );

  useRegisterSidebar(sidebar);

  if (loading) {
    return <SplashScreen embedded showLogo={false} description="Loading retinues…" />;
  }

  if (!retinues.length) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <p className="text-sm text-cream-400">Create your first retinue to get started.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col px-4 py-4">
      <div className="flex w-full flex-col gap-4">
        {retinues.map((retinue) => (
          <div key={retinue.id} className="relative w-full">
            <button
              type="button"
              onClick={() => onOpenRetinue(retinue.id)}
              className="w-full rounded-lg border border-night-800 bg-night-900/70 p-4 pr-12 text-left hover:border-accent-400"
            >
              <div className="text-lg font-semibold text-cream-100">{retinue.name || "Untitled retinue"}</div>
              <div className="mt-1 text-sm text-cream-400">{formatRetinueSummary(retinue, ARCHETYPES)}</div>
            </button>
            <button
              type="button"
              aria-label={`Delete ${retinue.name || "Untitled retinue"}`}
              onClick={(event) => handleDelete(event, retinue.id)}
              className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded border border-night-700 bg-night-950 text-cream-400 hover:border-rose-400 hover:text-rose-200"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
