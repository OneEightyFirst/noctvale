import React from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { SideNavProvider, useSideNav } from "../contexts/SideNavContext.jsx";
import FeedbackButton from "./FeedbackButton.jsx";
import NoctvaleLogo, { NoctvaleMark } from "./NoctvaleLogo.jsx";
import UserMenu from "./UserMenu.jsx";

const RULES_HOME = "/rules/";

function AppLogo({ className = "h-20 w-auto" }) {
  return (
    <a href={RULES_HOME} className="block shrink-0">
      <NoctvaleLogo className={className} />
    </a>
  );
}

function AppHeader({ navItems, showSidebar }) {
  const { user } = useAuth();
  const { mobileOpen, toggleMobile } = useSideNav();

  return (
    <header className="sticky top-0 z-40 shrink-0 border-b border-night-800 bg-night-950/95 backdrop-blur">
      <nav className="flex items-start gap-2 px-4 py-3" aria-label="App">
        {showSidebar ? (
          <>
            <button
              type="button"
              className="grid h-9 w-9 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 hover:border-cream-500 hover:text-cream-100 lg:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <a href={RULES_HOME} className="shrink-0 lg:hidden">
              <NoctvaleMark className="h-9 w-9" />
            </a>
          </>
        ) : (
          <AppLogo className="h-12 w-auto shrink-0 lg:hidden" />
        )}

        <div className="ml-auto flex items-start gap-2">
          {navItems}
          {user ? <UserMenu user={user} /> : null}
        </div>
      </nav>
    </header>
  );
}

function AppLogoColumn({ showSidebar }) {
  const { sidebar, mobileOpen, closeMobile } = useSideNav();

  return (
    <>
      {showSidebar && mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-night-950/70 lg:hidden"
          onClick={closeMobile}
        />
      ) : null}

      <div className="hidden w-80 shrink-0 lg:block" aria-hidden="true" />

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-night-800 bg-night-950",
          showSidebar
            ? [
                "transition-transform duration-200",
                mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              ].join(" ")
            : "hidden lg:flex",
        ].join(" ")}
        aria-label={showSidebar ? "App navigation" : undefined}
      >
        <div className="shrink-0 px-4 py-4">
          <AppLogo />
        </div>

        {showSidebar ? <div className="min-h-0 flex-1 overflow-y-auto p-3 pb-4">{sidebar}</div> : null}
      </aside>
    </>
  );
}

function AppShellLayout({ children, navItems, showSidebar }) {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-night-950 text-cream-100">
      <div className="flex min-h-0 flex-1">
        <AppLogoColumn showSidebar={showSidebar} />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppHeader navItems={navItems} showSidebar={showSidebar} />
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        </div>
      </div>
      {user ? <FeedbackButton /> : null}
    </div>
  );
}

export default function AppShell({ children, navItems = null, showSidebar = false }) {
  return (
    <SideNavProvider>
      <AppShellLayout navItems={navItems} showSidebar={showSidebar}>
        {children}
      </AppShellLayout>
    </SideNavProvider>
  );
}
