import React, { Suspense, lazy, useEffect, useState } from "react";
import { ScrollText, Users } from "lucide-react";
import { useAuth } from "./contexts/AuthContext.jsx";
import AppShell from "./components/AppShell.jsx";
import SignInScreen from "./components/SignInScreen.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import RetinueLibrary from "./components/RetinueLibrary.jsx";

const RetinueEditor = lazy(() => import("./components/RetinueEditor.jsx"));
const RulesWiki = lazy(() => import("./components/RulesWiki.jsx"));

function viewFromLocation() {
  return window.location.hash.startsWith("#rules/") ? "rules" : "home";
}

function viewFromHistoryState(state) {
  return state?.noctvaleView === "retinues" || state?.noctvaleView === "rules" || state?.noctvaleView === "home"
    ? state.noctvaleView
    : viewFromLocation();
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

function WelcomeHome({ onShowRules, onShowRetinues }) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 items-center px-4 py-10">
      <section className="w-full rounded-lg border border-night-800 bg-night-900/70 p-5 sm:p-7">
        <div className="text-xs font-semibold uppercase tracking-wider text-accent-300">Noctvale playtest</div>
        <h2 id="welcome-title" className="mt-2 text-2xl font-semibold text-cream-50">
          Welcome to Noctvale
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-cream-100">
          <p>Noctvale is still in development. Rules, balance, wording, and the retinue builder will have issues while the game is being tested.</p>
          <p>Please send rules feedback and app problems through the feedback form in the account menu so they are tracked in the right place.</p>
          <p>Thanks for playing and helping shape the game.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onShowRules}
            className="inline-flex h-10 items-center rounded border border-accent-400 bg-accent-500/20 px-4 text-sm font-semibold text-accent-100 hover:bg-accent-500/30"
          >
            Read the rules
          </button>
          <button
            type="button"
            onClick={onShowRetinues}
            className="inline-flex h-10 items-center rounded border border-night-700 bg-night-950 px-4 text-sm font-semibold text-cream-100 hover:border-cream-500"
          >
            Build a retinue
          </button>
        </div>
      </section>
    </main>
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
  const [activeView, setActiveView] = useState(() => viewFromLocation());

  useEffect(() => {
    setRetinueEditing(false);
  }, [activeRetinueId]);

  useEffect(() => {
    function handlePopState(event) {
      if (!activeRetinueId) setActiveView(viewFromHistoryState(event.state));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeRetinueId]);

  function openRetinue(retinueId) {
    setActiveView("retinues");
    setActiveRetinueId(retinueId);
  }

  function showRetinueLibrary() {
    window.history.pushState({ noctvaleView: "retinues" }, "", appRootUrl());
    setActiveView("retinues");
    setActiveRetinueId(null);
  }

  function showRules() {
    window.history.pushState({ noctvaleView: "rules", articleId: "intro", anchor: "" }, "", "#rules/intro");
    setActiveView("rules");
    setActiveRetinueId(null);
  }

  const navItems = (
    <div className="inline-flex rounded border border-night-700 bg-night-900 p-1">
      <button
        type="button"
        onClick={showRules}
        className={`inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm ${
          activeView === "rules" ? "bg-accent-500/20 text-accent-100" : "text-cream-300 hover:text-cream-100"
        }`}
      >
        <ScrollText className="h-4 w-4" aria-hidden="true" />
        Rules
      </button>
      <button
        type="button"
        onClick={showRetinueLibrary}
        className={`inline-flex h-8 items-center gap-1 rounded px-2.5 text-sm ${
          activeView === "retinues" ? "bg-accent-500/20 text-accent-100" : "text-cream-300 hover:text-cream-100"
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

  return (
    <AppShell
      title={activeRetinueId ? "Playtesting Retinue Builder" : activeView === "rules" ? "Noctvale Rules" : activeView === "home" ? "Noctvale Playtest" : "Playtesting Retinue Builder"}
      navItems={navItems}
    >
      {activeRetinueId && user ? (
        <Suspense fallback={<ViewFallback label="Loading retinue editor…" />}>
          <RetinueEditor
            retinueId={activeRetinueId}
            editing={retinueEditing}
            onToggleEditing={() => setRetinueEditing((current) => !current)}
            onBackToLibrary={showRetinueLibrary}
          />
        </Suspense>
      ) : activeView === "rules" ? (
        <>
          <Suspense fallback={<ViewFallback label="Loading rules…" />}>
            <RulesWiki />
          </Suspense>
          <VersionFooter />
        </>
      ) : activeView === "home" ? (
        <>
          <WelcomeHome onShowRules={showRules} onShowRetinues={showRetinueLibrary} />
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
