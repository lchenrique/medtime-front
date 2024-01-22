"use client";

import { useHeader } from "@/hooks/useHeader";
import { useHeaderStore } from "@/store/header";
import { cn } from "@/utils";

export interface IProfileFlexProps {
  children: any;
}

const ProfileFlex = (props: IProfileFlexProps) => {
  const { title, backUrl } = useHeaderStore();

  return (
    <div className={cn("truncate", title || backUrl ? "text-right hidden sm:block " : "mr-5")}>
      {props.children}
    </div>
  );
};

export { ProfileFlex };
