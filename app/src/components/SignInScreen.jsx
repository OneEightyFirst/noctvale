import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import SplashScreen from "./SplashScreen.jsx";

const inputClassName =
  "w-full rounded-lg border border-night-700 bg-night-900/70 px-3 py-2.5 text-sm text-cream-100 outline-none focus:border-accent-400";

const buttonClassName =
  "w-full rounded-lg border border-night-700 bg-night-900/70 px-4 py-3 text-sm font-medium text-cream-100 hover:border-accent-400 disabled:cursor-not-allowed disabled:opacity-60";

const linkClassName = "text-xs text-cream-400 underline-offset-4 hover:text-cream-200 hover:underline";

export default function SignInScreen({ embedded = false, showLogo = true }) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword, error, setError } = useAuth();
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  function switchMode(nextMode) {
    setMode(nextMode);
    setError("");
    setResetSent(false);
    setPassword("");
  }

  async function handleEmailSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setResetSent(false);

    try {
      if (mode === "signin") {
        await signInWithEmail(email, password);
      } else if (mode === "signup") {
        await signUpWithEmail(email, password);
      } else {
        await resetPassword(email);
        setResetSent(true);
      }
    } catch {
      // Error message is set in AuthContext.
    } finally {
      setSubmitting(false);
    }
  }

  const emailFormTitle =
    mode === "signin" ? "Sign in with email" : mode === "signup" ? "Create an account" : "Reset password";

  const emailSubmitLabel =
    mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link";

  return (
    <SplashScreen
      embedded={embedded}
      showLogo={showLogo}
      title="Playtesting Retinue Builder"
      description="Sign in to create and save retinues."
    >
      <div className="space-y-6 text-left">
        <form className="space-y-3" onSubmit={handleEmailSubmit} noValidate>
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-cream-500">
            {emailFormTitle}
          </div>

          <div>
            <label htmlFor="auth-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-500">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={inputClassName}
            />
          </div>

          {mode !== "reset" ? (
            <div>
              <label htmlFor="auth-password" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cream-500">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                name="password"
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={inputClassName}
              />
            </div>
          ) : null}

          <button type="submit" disabled={submitting} className={buttonClassName}>
            {submitting ? "Please wait…" : emailSubmitLabel}
          </button>

          {resetSent ? (
            <p className="text-sm text-emerald-300">Check your email for a password reset link.</p>
          ) : null}

          {mode === "signin" ? (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <button type="button" onClick={() => switchMode("signup")} className={linkClassName}>
                Create an account
              </button>
              <button type="button" onClick={() => switchMode("reset")} className={linkClassName}>
                Forgot password?
              </button>
            </div>
          ) : null}

          {mode === "signup" ? (
            <button type="button" onClick={() => switchMode("signin")} className={linkClassName}>
              Already have an account? Sign in
            </button>
          ) : null}

          {mode === "reset" ? (
            <button type="button" onClick={() => switchMode("signin")} className={linkClassName}>
              Back to sign in
            </button>
          ) : null}
        </form>

        {mode !== "reset" ? (
          <>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-cream-600">
              <div className="h-px flex-1 bg-night-800" />
              <span>or</span>
              <div className="h-px flex-1 bg-night-800" />
            </div>

            <button type="button" onClick={signInWithGoogle} disabled={submitting} className={buttonClassName}>
              Continue with Google
            </button>
          </>
        ) : null}

        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      </div>
    </SplashScreen>
  );
}
