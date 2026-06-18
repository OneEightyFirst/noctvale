import React, { useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircleWarning } from "lucide-react";
import FeedbackForm from "./FeedbackForm.jsx";

export default function FeedbackButton() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Send feedback"
        aria-expanded={feedbackOpen}
        onClick={() => setFeedbackOpen(true)}
        className="fixed bottom-6 right-6 z-[100] grid h-14 w-14 place-items-center rounded-full border border-accent-400/50 bg-accent-500 text-cream-50 shadow-lg shadow-black/40 transition hover:border-accent-300 hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
      >
        <MessageCircleWarning className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </button>
      <FeedbackForm open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>,
    document.body,
  );
}
