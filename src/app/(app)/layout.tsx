"use client";

import { useAuth } from "@/hooks/useAuth.hook";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomBar } from "@/components/BottomBar";
import { Loading } from "react-daisyui";
import { usePageTransition } from "@/hooks/usePageTransition";

const BaseLayout = ({ children }: any) => {
  const { loading } = useAuth();

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center ga-3 px-6 gap-4">
          <Loading color="primary" />
        </div>
      ) : (
        <div className=" w-full flex flex-col ga-3  gap-4 pb-24">
          <Header />
          <div className="h-full px-3 pt-20">{children}</div>

          <BottomBar />
        </div>
      )}
    </>
  );
};

export default BaseLayout;
