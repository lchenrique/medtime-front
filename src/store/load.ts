import { create } from "zustand";

interface LoadState {
  loading?: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoadingLayout = create<LoadState>((set) => {
  return {
    loading: false,
    setLoading: (loading) => set({ loading})
  };
});
