import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RuleModal({ title, subtitle, meta, body, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const lines = Array.isArray(body) ? body.filter(Boolean) : [body].filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-night-700 bg-night-950 p-4 shadow-2xl shadow-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-cream-100">{title}</h3>
            {subtitle ? <p className="mt-0.5 text-xs text-cream-500">{subtitle}</p> : null}
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 hover:border-cream-500"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        {meta ? <div className="mt-2">{meta}</div> : null}
        <div className="mt-3 space-y-2 text-sm leading-relaxed text-cream-100">
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RuleLink({ label, title = label, subtitle, meta, body, className }) {
  const [open, setOpen] = useState(false);
  const hasBody = Array.isArray(body) ? body.some(Boolean) : Boolean(body);

  if (!hasBody) {
    return <span className={className}>{label}</span>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cx(
          "underline decoration-dotted decoration-cream-500/60 underline-offset-2 hover:text-cream-50 hover:decoration-cream-100",
          className,
        )}
      >
        {label}
      </button>
      {open ? (
        <RuleModal title={title} subtitle={subtitle} meta={meta} body={body} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
