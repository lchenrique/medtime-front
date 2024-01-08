import { useAuth } from "@/hooks/useAuth.hook";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomBar } from "@/components/BottomBar";
import { Loading } from "react-daisyui";
import { usePageTransition } from "@/hooks/usePageTransition";
import { getSession } from "next-auth/react";

const LoginLayout = async ({ children }: any) => {
  return <>{children}</>;
};

export default LoginLayout;
