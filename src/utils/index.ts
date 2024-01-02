import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import config from "../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({});

  return twMerge(clsx(inputs));
}
