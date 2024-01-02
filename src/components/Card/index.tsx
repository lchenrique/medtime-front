"use client";
import { cn } from "@/utils";
import React, { ReactNode } from "react";
import { Card as DaCArd } from "react-daisyui";

type TCard = Parameters<typeof DaCArd>[0];
export interface ICardProps extends TCard {
  children: ReactNode;
}

const Card = ({ className, children, ...props }: ICardProps) => {
  return (
    <DaCArd
      className={cn(
        "flex items-center justify-between px-5 py-4 rounded-lg w-full",
        className,
        "flex-row"
      )}
      {...props}
    >
      {children}
    </DaCArd>
  );
};

export { Card };
