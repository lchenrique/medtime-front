import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let timeout:any = null;
export function delayTyping(value:string, callBack:(value:string)=>void){
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      callBack(value)
    }, 500);
}