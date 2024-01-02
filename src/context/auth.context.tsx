"use client";
import { useAuth } from "@/hooks/useAuth.hook";
import { redirect, usePathname } from "next/navigation";
import { createContext, useContext, Context, useEffect } from "react";
import { Theme } from "react-daisyui";

const authUserContext = createContext({
  user: null,
  loading: true,
});

export function AuthUserProvider({ children }: any) {
  const auth = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      if (!auth.loading && !auth.user) redirect("/");
    }
  }, [auth.user, auth.loading]);

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
