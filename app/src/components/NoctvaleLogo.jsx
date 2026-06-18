import React from "react";

export default function NoctvaleLogo({ className = "mx-auto h-48 w-auto sm:h-56" }) {
  return (
    <img
      src="/images/noctvale-logo_ondark.svg"
      alt="Noctvale"
      className={className}
      width={466}
      height={388}
    />
  );
}
