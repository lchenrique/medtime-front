import { useHeaderStore } from "@/store/header";
import { useEffect } from "react";

export const useHeader = (title: string, backUrl: string) => {
  const { setBackUrl, setTitle } = useHeaderStore();

  useEffect(() => {
    setBackUrl(backUrl);
    setTitle(title);
  }, [title, backUrl, setBackUrl, setTitle]);
};
