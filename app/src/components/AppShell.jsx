import React from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import NoctvaleLogo from "./NoctvaleLogo.jsx";
import UserMenu from "./UserMenu.jsx";

export default function AppShell({ children, navItems = null, title = "Playtesting Retinue Builder" }) {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-night-950 text-cream-100">
      <header className="sticky top-0 z-40 bg-night-950/95 backdrop-blur-sm">
        <div className="relative flex w-full items-start justify-between gap-4 px-4 py-2">
          <NoctvaleLogo className="relative z-10 h-[7rem] w-auto shrink-0" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center px-4 text-center">
            <h1 className="text-xl font-semibold tracking-wide">{title}</h1>
          </div>
          <nav className="relative z-10 flex shrink-0 items-start gap-2" aria-label="App">
            {navItems}
            {user ? <UserMenu user={user} /> : null}
          </nav>
        </div>
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
