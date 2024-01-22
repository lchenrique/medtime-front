"use client";
 // eslint-disable-next-line react-hooks/exhaustive-deps
import { useLoadingLayout } from "@/store/load";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export interface ILoadingWapperProps {
  children: any;
}

const LoadingWrapper = (props: ILoadingWapperProps) => {
  const [opacity, setOpacity] = React.useState(0);
  const [display, setDisplay] = React.useState("none");

  const { loading } = useLoadingLayout();

  useEffect(() => {
    if (loading) {
      if (opacity == 0) {
        setDisplay("flex");
        setTimeout(() => {
          setOpacity(1);
        }, 1);
      }
   
      return;
    }
    if (opacity == 1) {
      setOpacity(0);
      setTimeout(() => {
        setDisplay("none");
      }, 300);
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <>
      {
        <div
          style={{
            opacity,
            display,
          }}
          className=" items-center transition-all text-primary justify-center absolute  border-[hsl(var(--primary))_hsl(var(--primary))]  top-0 h-screen w-screen bg-background  z-[99999999]"
        >
         <ClipLoader
            loading
            color="inherit"
            size={50}
          />
        </div>
      }
      {props.children}
    </>
  );
};

export { LoadingWrapper };
