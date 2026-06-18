import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";
import UserMenu from "./components/UserMenu.jsx";

function WikiUserMenu() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return null;
  }

  return <UserMenu user={user} />;
}

const mountNode = document.getElementById("wiki-user-menu");

if (mountNode) {
  createRoot(mountNode).render(
    <AuthProvider>
      <WikiUserMenu />
    </AuthProvider>,
  );
}
