import React from "react";
import { Plus, X } from "lucide-react";
import { ARCHETYPES } from "../data/noctvale.js";
import { useRetinues } from "../hooks/useRetinues.js";
import { formatRetinueSummary } from "../lib/retinue.js";
import SplashScreen from "./SplashScreen.jsx";

export default function RetinueLibrary({ onOpenRetinue }) {
  const { retinues, loading, error, createRetinue, deleteRetinue } = useRetinues();

  async function handleCreate() {
    const id = await createRetinue();
    if (id) onOpenRetinue(id);
  }

  async function handleDelete(event, retinueId) {
    event.stopPropagation();
    try {
      await deleteRetinue(retinueId);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <SplashScreen embedded showLogo={false} description="Loading retinues…" />;
  }

  if (!retinues.length) {
    return (
      <SplashScreen
        embedded
        showLogo={false}
        title="Your Retinues"
        description="Create your first retinue to get started."
      >
        <button
          type="button"
          onClick={handleCreate}
          className="inline-flex items-center gap-2 rounded-lg border border-accent-500/40 bg-accent-500/10 px-5 py-3 text-sm font-medium text-accent-100 hover:border-accent-400"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add a retinue
        </button>
        {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
      </SplashScreen>
    );
  }

  return (
    <>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6">
        <h1 className="text-xl font-semibold tracking-wide">Your Retinues</h1>
        <button
          type="button"
          onClick={handleCreate}
          className="inline-flex items-center gap-2 rounded border border-accent-500/40 bg-accent-500/10 px-3 py-2 text-sm text-accent-100 hover:border-accent-400"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add retinue
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-6">
        {error ? <p className="mb-4 text-sm text-rose-300">{error}</p> : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {retinues.map((retinue) => (
            <div key={retinue.id} className="relative">
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
    </>
  );
}
