import React, { Suspense, lazy, useEffect, useState } from "react";
import { ArrowLeft, ScrollText, Users } from "lucide-react";
import { useAuth } from "./contexts/AuthContext.jsx";
import AppShell from "./components/AppShell.jsx";
import SignInScreen from "./components/SignInScreen.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import RetinueLibrary from "./components/RetinueLibrary.jsx";

const RetinueEditor = lazy(() => import("./components/RetinueEditor.jsx"));
const RulesWiki = lazy(() => import("./components/RulesWiki.jsx"));

function ViewFallback({ label }) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16 text-cream-400">
      {label}
    </div>
  );
}

function VersionFooter() {
  return (
    <div
      className="pointer-events-none fixed bottom-3 right-4 select-none text-xs text-cream-600"
      aria-label={`Version ${__APP_VERSION__}, build ${__GIT_SHA__}`}
    >
      v{__APP_VERSION__} · {__GIT_SHA__}
    </div>
  );
}

export default function App() {
  const { user, loading } = useAuth();
  const [activeRetinueId, setActiveRetinueId] = useState(null);
  const [retinueEditing, setRetinueEditing] = useState(false);
  const [activeView, setActiveView] = useState("retinues");

  useEffect(() => {
    setRetinueEditing(false);
  }, [activeRetinueId]);

  function openRetinue(retinueId) {
    setActiveView("retinues");
    setActiveRetinueId(retinueId);
  }

  function showRetinueLibrary() {
    setActiveView("retinues");
    setActiveRetinueId(null);
  }

  const navItems = activeRetinueId && user ? (
    <button
      type="button"
      onClick={showRetinueLibrary}
      className="inline-flex h-9 items-center gap-1 rounded border border-night-700 bg-night-900 px-3 text-sm text-cream-200 hover:border-cream-500"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Library
    </button>
  ) : (
    <div className="inline-flex rounded border border-night-700 bg-night-900 p-1">
      <button
        type="button"
        onClick={() => setActiveView("retinues")}
        className={`inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm ${
          activeView === "retinues" ? "bg-accent-500/20 text-accent-100" : "text-cream-300 hover:text-cream-100"
        }`}
      >
        <Users className="h-4 w-4" aria-hidden="true" />
        Retinues
      </button>
      <button
        type="button"
        onClick={() => setActiveView("rules")}
        className={`inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm ${
          activeView === "rules" ? "bg-accent-500/20 text-accent-100" : "text-cream-300 hover:text-cream-100"
        }`}
      >
        <ScrollText className="h-4 w-4" aria-hidden="true" />
        Rules
      </button>
    </div>
  );

  if (loading) {
    return <SplashScreen description="Loading…" />;
  }

  return (
    <AppShell
      title={activeRetinueId ? "Playtesting Retinue Builder" : activeView === "rules" ? "Noctvale Rules" : "Playtesting Retinue Builder"}
      navItems={navItems}
    >
      {activeRetinueId && user ? (
        <Suspense fallback={<ViewFallback label="Loading retinue editor…" />}>
          <RetinueEditor
            retinueId={activeRetinueId}
            editing={retinueEditing}
            onToggleEditing={() => setRetinueEditing((current) => !current)}
          />
        </Suspense>
      ) : activeView === "rules" ? (
        <>
          <Suspense fallback={<ViewFallback label="Loading rules…" />}>
            <RulesWiki />
          </Suspense>
          <VersionFooter />
        </>
      ) : !user ? (
        <SignInScreen embedded showLogo={false} />
      ) : (
        <>
          <RetinueLibrary onOpenRetinue={openRetinue} />
          <VersionFooter />
        </>
      )}
    </AppShell>
  );
}
