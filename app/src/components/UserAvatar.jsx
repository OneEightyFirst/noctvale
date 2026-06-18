import React, { useState } from "react";

function getUserInitial(user) {
  const source = user?.email ?? user?.displayName ?? "";
  const trimmed = source.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

function getUserLabel(user) {
  return user?.displayName || user?.email || "Account";
}

export default function UserAvatar({ user, className = "h-9 w-9" }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const label = getUserLabel(user);
  const showPhoto = user?.photoURL && !photoFailed;

  if (showPhoto) {
    return (
      <img
        src={user.photoURL}
        alt=""
        aria-label={label}
        referrerPolicy="no-referrer"
        onError={() => setPhotoFailed(true)}
        className={`rounded-full border border-night-700 object-cover ${className}`}
      />
    );
  }

  return (
    <div
      aria-label={label}
      className={`grid place-items-center rounded-full border border-night-700 bg-night-900 text-sm font-semibold uppercase text-accent-100 ${className}`}
    >
      {getUserInitial(user)}
    </div>
  );
}
