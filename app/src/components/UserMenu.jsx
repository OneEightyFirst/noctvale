import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import UserAvatar from "./UserAvatar.jsx";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserMenu({ user, className }) {
  const { signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  async function handleSignOut() {
    setOpen(false);
    await signOut();
  }

  return (
    <div className={className}>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="Account menu"
          onClick={() => setOpen((current) => !current)}
          className={cx(
            "rounded-full transition-shadow duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
            open && "ring-2 ring-accent-400/60 ring-offset-2 ring-offset-night-950",
          )}
        >
          <UserAvatar user={user} />
        </button>

        <div
          role="menu"
          aria-hidden={!open}
          className={cx(
            "absolute right-0 top-[calc(100%+0.5rem)] z-50 w-64 origin-top-right overflow-hidden rounded-lg border border-night-700 bg-night-900 shadow-xl shadow-black/40",
            "transition duration-200 ease-out motion-reduce:transition-none",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-95 opacity-0",
          )}
        >
          <div className="border-b border-night-800 px-4 py-3">
            <div className="text-xs uppercase tracking-wider text-cream-500">Signed in as</div>
            <div className="mt-1 truncate text-sm text-cream-100">{user?.email ?? "Unknown account"}</div>
          </div>

          <div className="p-2">
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              className="w-full rounded-md px-3 py-2 text-left text-sm text-cream-200 transition hover:bg-night-800 hover:text-cream-50"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
