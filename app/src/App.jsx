import React, { Suspense, lazy, useEffect, useState } from "react";
import { ScrollText, Users } from "lucide-react";
import { useAuth } from "./contexts/AuthContext.jsx";
import AppShell from "./components/AppShell.jsx";
import SignInScreen from "./components/SignInScreen.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import RetinueLibrary from "./components/RetinueLibrary.jsx";

const RetinueEditor = lazy(() => import("./components/RetinueEditor.jsx"));

const RULES_URL = "/rules/";

function viewFromHistoryState(state) {
  return state?.noctvaleView === "retinues" ? "retinues" : "retinues";
}

function appRootUrl() {
  return `${window.location.pathname}${window.location.search}`;
}

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
      className="pointer-events-none fixed bottom-3 right-24 select-none text-xs text-cream-600"
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
    const hash = window.location.hash;
    const legacyRules = hash.match(/^#rules\/([^/?#]+)/);
    if (legacyRules) {
      const page = legacyRules[1] === "intro" ? "" : `${legacyRules[1]}/`;
      const anchorMatch = hash.match(/^#rules\/[^/]+\/(.+)$/);
      const anchor = anchorMatch ? `#${decodeURIComponent(anchorMatch[1])}` : "";
      window.location.replace(`/rules/${page}${anchor}`);
    }
  }, []);

  useEffect(() => {
    function handlePopState(event) {
      if (!activeRetinueId) setActiveView(viewFromHistoryState(event.state));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeRetinueId]);

  function openRetinue(retinueId, { editing = false } = {}) {
    setActiveView("retinues");
    setActiveRetinueId(retinueId);
    setRetinueEditing(editing);
  }

  function showRetinueLibrary() {
    window.history.pushState({ noctvaleView: "retinues" }, "", appRootUrl());
    setActiveView("retinues");
    setActiveRetinueId(null);
    setRetinueEditing(false);
  }

  const navItems = (
    <div className="inline-flex rounded border border-night-700 bg-night-900 p-1">
      <a
        href={RULES_URL}
        className="inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm text-cream-300 hover:text-cream-100"
      >
        <ScrollText className="h-4 w-4" aria-hidden="true" />
        Rules
      </a>
      <button
        type="button"
        onClick={showRetinueLibrary}
        className={`inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm ${
          activeView === "retinues" || activeRetinueId ? "bg-accent-500/20 text-accent-100" : "text-cream-300 hover:text-cream-100"
        }`}
      >
        <Users className="h-4 w-4" aria-hidden="true" />
        Retinues
      </button>
    </div>
  );

  if (loading) {
    return <SplashScreen description="Loading…" />;
  }

  const showSidebar = Boolean(user);

  return (
    <AppShell navItems={navItems} showSidebar={showSidebar}>
      {activeRetinueId && user ? (
        <Suspense fallback={<ViewFallback label="Loading retinue editor…" />}>
          <RetinueEditor
            retinueId={activeRetinueId}
            editing={retinueEditing}
            onToggleEditing={() => setRetinueEditing((current) => !current)}
            onBackToLibrary={showRetinueLibrary}
          />
        </Suspense>
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
