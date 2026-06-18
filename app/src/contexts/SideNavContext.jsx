import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const SideNavContext = createContext(null);

export function SideNavProvider({ children }) {
  const [sidebar, setSidebar] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((current) => !current), []);

  const value = useMemo(
    () => ({
      sidebar,
      setSidebar,
      mobileOpen,
      openMobile,
      closeMobile,
      toggleMobile,
    }),
    [sidebar, mobileOpen, openMobile, closeMobile, toggleMobile],
  );

  return <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>;
}

export function useSideNav() {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error("useSideNav must be used within SideNavProvider");
  }
  return context;
}

export function useRegisterSidebar(content) {
  const { setSidebar } = useSideNav();

  React.useEffect(() => {
    setSidebar(content);
    return () => setSidebar(null);
  }, [content, setSidebar]);
}
