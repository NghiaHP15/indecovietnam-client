/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import useStore from "../../store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SyncZustandWithSession>{children}</SyncZustandWithSession>
    </SessionProvider>
  );
};

export default Providers;

// 👉 Tách riêng thành component sync session → zustand
const SyncZustandWithSession = ({ children }: { children: React.ReactNode }) => {
  const { addUser, addToken, logout } = useStore();
  const { data: session, status } = useSession();

  useEffect(() => {
    const accessToken = (session as any)?.accessToken;

    if (status === "authenticated" && session?.user && accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("loginType", "oauth");
      addUser(session.user);
      addToken(accessToken);
    }

    if (status === "unauthenticated") {
      const loginType = localStorage.getItem("loginType");
      if (loginType === "oauth") {
        logout(); // Clear zustand + localStorage
      }
    }
  }, [status, session, addUser, addToken, logout]);

  return <>{children}</>;
};
