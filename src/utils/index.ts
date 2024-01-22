import { extendTailwindMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import config from "../../tailwind.config";

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({});

  return twMerge(clsx(inputs));
}


export const bufferToBase64 = (buffer:any) => btoa(String.fromCharCode(...new Uint8Array(buffer)));
export const base64ToBuffer = (base64:any) => Uint8Array.from(atob(base64), c => c.charCodeAt(0));
