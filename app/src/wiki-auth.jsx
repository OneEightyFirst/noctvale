import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import FeedbackButton from "./components/FeedbackButton.jsx";
import UserMenu from "./components/UserMenu.jsx";

function WikiAuthChrome() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return null;
  }

  return (
    <>
      <UserMenu user={user} />
      <FeedbackButton />
    </>
  );
}

const mountNode = document.getElementById("wiki-user-menu");

if (mountNode) {
  createRoot(mountNode).render(
    <AuthProvider>
      <WikiAuthChrome />
    </AuthProvider>,
  );
}
