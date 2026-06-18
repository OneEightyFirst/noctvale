import React from "react";
import NoctvaleLogo from "./NoctvaleLogo.jsx";

function SplashContent({ title, description, children, footer, showLogo }) {
  return (
    <div className="w-full max-w-md text-center">
      {showLogo ? <NoctvaleLogo /> : null}
      {title ? (
        <h1 className={`${showLogo ? "mt-8" : ""} text-xl font-semibold tracking-wide text-cream-100`}>{title}</h1>
      ) : null}
      {description ? <p className="mt-2 text-sm text-cream-400">{description}</p> : null}
      {children ? <div className="mt-8">{children}</div> : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}

export default function SplashScreen({
  title,
  description,
  children,
  footer = null,
  showLogo = true,
  embedded = false,
}) {
  if (embedded) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <SplashContent title={title} description={description} footer={footer} showLogo={showLogo}>
          {children}
        </SplashContent>
      </div>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-night-950 px-4 text-cream-100">
      <SplashContent title={title} description={description} footer={footer} showLogo={showLogo}>
        {children}
      </SplashContent>
    </main>
  );
}
