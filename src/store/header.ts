import { useEffect } from "react";
import { create } from "zustand";

interface useHerderState {
  title?: string;
  backUrl?: string;
  setBackUrl: (url: string) => void;
  setTitle: (title: string) => void;
}

export const useHeaderStore = create<useHerderState>((set) => {
  return {
    title: "",
    setTitle: (title) => {
      set({
        title,
      });
    },
    setBackUrl: (backUrl) => {
      set({
        backUrl,
      });
    },
  };
});
