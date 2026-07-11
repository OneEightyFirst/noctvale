import React, { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, Copy, Printer, Share2 } from "lucide-react";
import { copyRetinueToClipboard, printRetinue } from "../lib/retinue-export.js";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShareMenu({ retinue, disabled = false, className }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
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

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (!copyError) return undefined;
    const timer = window.setTimeout(() => setCopyError(false), 3000);
    return () => window.clearTimeout(timer);
  }, [copyError]);

  async function handleCopy() {
    try {
      await copyRetinueToClipboard(retinue);
      setCopied(true);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setCopyError(true);
    }
  }

  function handlePrint() {
    printRetinue(retinue);
    setOpen(false);
  }

  return (
    <div className={className}>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={copied ? "Copied retinue list" : copyError ? "Copy failed" : "Share retinue"}
          disabled={disabled}
          onClick={() => setOpen((current) => !current)}
          className={cx(
            "grid h-9 w-9 shrink-0 place-items-center rounded border bg-night-900 transition",
            disabled
              ? "cursor-not-allowed border-night-800 text-cream-600 opacity-60"
              : "border-night-700 text-cream-300 hover:border-accent-400 hover:text-accent-200",
            copied && "border-emerald-500/40 text-emerald-200",
            copyError && "border-red-500/40 text-red-400",
          )}
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : copyError ? (
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Share2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <div
          role="menu"
          aria-hidden={!open}
          className={cx(
            "absolute left-0 top-[calc(100%+0.5rem)] z-50 w-44 origin-top-left overflow-hidden rounded-lg border border-night-700 bg-night-900 shadow-xl shadow-black/40",
            "transition duration-200 ease-out motion-reduce:transition-none",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-95 opacity-0",
          )}
        >
          <div className="p-1">
            <button
              type="button"
              role="menuitem"
              onClick={handleCopy}
              className={cx(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition hover:bg-night-800",
                copyError ? "text-red-400 hover:text-red-300" : "text-cream-200 hover:text-cream-50",
              )}
            >
              <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
              {copyError ? "Copy failed" : "Copy"}
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={handlePrint}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-cream-200 transition hover:bg-night-800 hover:text-cream-50"
            >
              <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
