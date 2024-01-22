import { Session } from "next-auth/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  user: null |  Session["user"];
  token: null | string;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;