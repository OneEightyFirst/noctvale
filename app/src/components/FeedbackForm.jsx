import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { submitPlaytestFeedback } from "../lib/submitFeedback.js";

const inputClassName =
  "w-full rounded-lg border border-night-700 bg-night-900/70 px-3 py-2.5 text-sm text-cream-100 outline-none focus:border-accent-400";

const labelClassName = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-500";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FEEDBACK_CATEGORIES = [
  { id: "rules", label: "Rules playtest" },
  { id: "app", label: "App bug report" },
];

const SEVERITIES = [
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];

const RULES_AREA_PLACEHOLDER = "e.g. Traditions, Mortal cap, equipment, a feat name";

function buildRulesPayload({ rulesTopic, rulesArea, rulesObservation, rulesExpected, pageUrl, user }) {
  const areaLine = rulesArea.trim() ? `Rule or area: ${rulesArea.trim()}` : "Rule or area: General / not specified";

  return {
    feedbackType: "rules",
    title: rulesTopic.trim(),
    stepsToReproduce: [
      "Playtesting feedback from the Noctvale retinue builder.",
      "",
      areaLine,
      `Submitted from: ${pageUrl}`,
    ].join("\n"),
    expectedBehavior: rulesExpected.trim() || "Playtester did not specify an expected rules interpretation.",
    actualBehavior: rulesObservation.trim(),
    additionalContext: rulesArea.trim()
      ? `Playtest focus area: ${rulesArea.trim()}`
      : "General playtesting feedback.",
    severity: "medium",
    pageUrl,
    reporterEmail: user?.email ?? "",
    environment: {
      userAgent: navigator.userAgent,
      appVersion: typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "unknown",
      gitSha: typeof __GIT_SHA__ !== "undefined" ? __GIT_SHA__ : "unknown",
    },
  };
}

function buildAppPayload({
  title,
  stepsToReproduce,
  expectedBehavior,
  actualBehavior,
  additionalContext,
  severity,
  pageUrl,
  user,
}) {
  return {
    feedbackType: "app",
    title: title.trim(),
    stepsToReproduce: stepsToReproduce.trim(),
    expectedBehavior: expectedBehavior.trim(),
    actualBehavior: actualBehavior.trim(),
    additionalContext: additionalContext.trim(),
    severity,
    pageUrl,
    reporterEmail: user?.email ?? "",
    environment: {
      userAgent: navigator.userAgent,
      appVersion: typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "unknown",
      gitSha: typeof __GIT_SHA__ !== "undefined" ? __GIT_SHA__ : "unknown",
    },
  };
}

export default function FeedbackForm({ open, onClose }) {
  const { user } = useAuth();
  const formId = useId();
  const [feedbackType, setFeedbackType] = useState("rules");
  const [rulesTopic, setRulesTopic] = useState("");
  const [rulesArea, setRulesArea] = useState("");
  const [rulesObservation, setRulesObservation] = useState("");
  const [rulesExpected, setRulesExpected] = useState("");
  const [title, setTitle] = useState("");
  const [stepsToReproduce, setStepsToReproduce] = useState("");
  const [expectedBehavior, setExpectedBehavior] = useState("");
  const [actualBehavior, setActualBehavior] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [severity, setSeverity] = useState("medium");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successUrl, setSuccessUrl] = useState("");
  const openedAtRef = useRef(0);

  const isRules = feedbackType === "rules";

  useEffect(() => {
    if (open) {
      openedAtRef.current = Date.now();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape" && !submitting) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, submitting]);

  useEffect(() => {
    if (!open) return;

    setError("");
    setSuccessUrl("");
  }, [open]);

  function resetRulesFields() {
    setRulesTopic("");
    setRulesArea("");
    setRulesObservation("");
    setRulesExpected("");
  }

  function resetAppFields() {
    setTitle("");
    setStepsToReproduce("");
    setExpectedBehavior("");
    setActualBehavior("");
    setAdditionalContext("");
    setSeverity("medium");
  }

  function resetForm() {
    setFeedbackType("rules");
    resetRulesFields();
    resetAppFields();
    setError("");
    setSuccessUrl("");
  }

  function handleTypeChange(typeId) {
    if (typeId === feedbackType) return;
    setFeedbackType(typeId);
    setError("");
  }

  function handleClose() {
    if (submitting) return;
    resetForm();
    onClose();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccessUrl("");

    const pageUrl = window.location.href;

    try {
      const payload = isRules
        ? buildRulesPayload({
            rulesTopic,
            rulesArea,
            rulesObservation,
            rulesExpected,
            pageUrl,
            user,
          })
        : buildAppPayload({
            title,
            stepsToReproduce,
            expectedBehavior,
            actualBehavior,
            additionalContext,
            severity,
            pageUrl,
            user,
          });

      const result = await submitPlaytestFeedback(payload);
      setSuccessUrl(result.issueUrl);
    } catch (submitError) {
      setError(submitError.message || "Could not submit feedback. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    if (Date.now() - openedAtRef.current < 250) return;
    handleClose();
  }

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[110] overflow-y-auto bg-black/75 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
      onClick={handleBackdropClick}
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          className={cx(
            "flex max-h-[min(88vh,calc(100vh-1.5rem))] w-full flex-col overflow-hidden rounded-lg border bg-night-950 shadow-2xl shadow-black",
            "max-w-2xl",
            isRules ? "border-accent-400/30" : "border-night-700",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className={cx(
              "shrink-0 border-b p-4",
              isRules ? "border-accent-400/20 bg-accent-400/5" : "border-night-800 bg-night-950",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-wider text-cream-500">
                  {isRules ? "Noctvale playtesting" : "Retinue builder"}
                </div>
                <h2 id={`${formId}-title`} className="text-lg font-semibold text-cream-100">
                  {isRules ? "Rules feedback" : "Report a bug"}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close feedback form"
                onClick={handleClose}
                disabled={submitting}
                className="grid h-8 w-8 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 hover:border-cream-500 disabled:opacity-60"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {successUrl ? (
            <div className="space-y-4 p-4">
              <p className="text-sm text-cream-200">
                Feedback sent. The team can review it on GitHub.
              </p>
              <a
                href={successUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm text-accent-300 underline-offset-4 hover:underline"
              >
                View on GitHub
              </a>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-lg border border-night-700 bg-night-900 px-4 py-2 text-sm text-cream-100 hover:border-accent-400"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form className="min-h-0 overflow-y-auto p-4" onSubmit={handleSubmit} noValidate>
              <fieldset className="space-y-4">
                <legend className="sr-only">Feedback details</legend>

                <div>
                  <span className={labelClassName}>Feedback type</span>
                  <div
                    className="grid grid-cols-2 gap-2 rounded-lg border border-night-800 bg-night-900/50 p-1"
                    role="radiogroup"
                    aria-label="Feedback type"
                  >
                    {FEEDBACK_CATEGORIES.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        role="radio"
                        aria-checked={feedbackType === type.id}
                        onClick={() => handleTypeChange(type.id)}
                        className={cx(
                          "rounded-md px-3 py-2 text-sm transition",
                          feedbackType === type.id
                            ? type.id === "rules"
                              ? "bg-accent-400/15 text-accent-100 ring-1 ring-accent-400/50"
                              : "bg-accent-400/10 text-accent-100 ring-1 ring-accent-400/40"
                            : "text-cream-300 hover:bg-night-800",
                        )}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {isRules ? (
                  <>
                    <div>
                      <label htmlFor={`${formId}-rules-topic`} className={labelClassName}>
                        Summary
                      </label>
                      <input
                        id={`${formId}-rules-topic`}
                        type="text"
                        required
                        minLength={3}
                        maxLength={200}
                        value={rulesTopic}
                        onChange={(event) => setRulesTopic(event.target.value)}
                        placeholder="Short headline for what came up"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-rules-area`} className={labelClassName}>
                        Rule or area{" "}
                        <span className="font-normal normal-case tracking-normal text-cream-600">(optional)</span>
                      </label>
                      <input
                        id={`${formId}-rules-area`}
                        type="text"
                        maxLength={120}
                        value={rulesArea}
                        onChange={(event) => setRulesArea(event.target.value)}
                        placeholder={RULES_AREA_PLACEHOLDER}
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-rules-observation`} className={labelClassName}>
                        What came up at the table
                      </label>
                      <textarea
                        id={`${formId}-rules-observation`}
                        required
                        minLength={10}
                        rows={5}
                        value={rulesObservation}
                        onChange={(event) => setRulesObservation(event.target.value)}
                        placeholder="Describe the edge case, confusion, or table ruling you hit while playtesting."
                        className={cx(inputClassName, "resize-y")}
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-rules-expected`} className={labelClassName}>
                        What you expected the rules to do{" "}
                        <span className="font-normal normal-case tracking-normal text-cream-600">(optional)</span>
                      </label>
                      <textarea
                        id={`${formId}-rules-expected`}
                        rows={3}
                        value={rulesExpected}
                        onChange={(event) => setRulesExpected(event.target.value)}
                        placeholder="If helpful, note how you read the rules or what you thought should happen."
                        className={cx(inputClassName, "resize-y")}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor={`${formId}-title-input`} className={labelClassName}>
                        Title
                      </label>
                      <input
                        id={`${formId}-title-input`}
                        type="text"
                        required
                        minLength={3}
                        maxLength={200}
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Short summary of the problem"
                        className={inputClassName}
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-steps`} className={labelClassName}>
                        Steps to reproduce
                      </label>
                      <textarea
                        id={`${formId}-steps`}
                        required
                        minLength={10}
                        rows={4}
                        value={stepsToReproduce}
                        onChange={(event) => setStepsToReproduce(event.target.value)}
                        placeholder="1. Go to…&#10;2. Select…&#10;3. See error"
                        className={cx(inputClassName, "resize-y")}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor={`${formId}-expected`} className={labelClassName}>
                          Expected behavior
                        </label>
                        <textarea
                          id={`${formId}-expected`}
                          required
                          minLength={3}
                          rows={3}
                          value={expectedBehavior}
                          onChange={(event) => setExpectedBehavior(event.target.value)}
                          placeholder="What should happen?"
                          className={cx(inputClassName, "resize-y")}
                        />
                      </div>
                      <div>
                        <label htmlFor={`${formId}-actual`} className={labelClassName}>
                          Actual behavior
                        </label>
                        <textarea
                          id={`${formId}-actual`}
                          required
                          minLength={3}
                          rows={3}
                          value={actualBehavior}
                          onChange={(event) => setActualBehavior(event.target.value)}
                          placeholder="What happened instead?"
                          className={cx(inputClassName, "resize-y")}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={`${formId}-context`} className={labelClassName}>
                        Additional context{" "}
                        <span className="font-normal normal-case tracking-normal text-cream-600">(optional)</span>
                      </label>
                      <textarea
                        id={`${formId}-context`}
                        rows={3}
                        value={additionalContext}
                        onChange={(event) => setAdditionalContext(event.target.value)}
                        placeholder="Screenshots, retinue setup, browser quirks, etc."
                        className={cx(inputClassName, "resize-y")}
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-severity`} className={labelClassName}>
                        Severity
                      </label>
                      <select
                        id={`${formId}-severity`}
                        value={severity}
                        onChange={(event) => setSeverity(event.target.value)}
                        className={inputClassName}
                      >
                        {SEVERITIES.map((level) => (
                          <option key={level.id} value={level.id}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {error ? (
                  <p className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300" role="alert">
                    {error}
                  </p>
                ) : null}
              </fieldset>

              <div className="mt-4 flex justify-end gap-2 border-t border-night-800 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={submitting}
                  className="rounded-lg border border-night-700 bg-night-900 px-4 py-2 text-sm text-cream-200 hover:border-cream-500 disabled:opacity-60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={cx(
                    "rounded-lg border px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60",
                    isRules
                      ? "border-accent-400/60 bg-accent-400/10 text-accent-100 hover:border-accent-400"
                      : "border-accent-400/50 bg-accent-400/10 text-accent-100 hover:border-accent-400",
                  )}
                >
                  {submitting ? "Submitting…" : isRules ? "Send playtest feedback" : "Submit bug report"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
