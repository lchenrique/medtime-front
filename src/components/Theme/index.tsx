"use client";
import { ReactNode } from "react";
import { Button, Theme } from "react-daisyui";

export interface IThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = (props: IThemeWrapperProps) => {
  return (
    <Theme dataTheme="light" className="h-full">
      <div className="flex h-full flex-col items-center justify-center">
        {props.children}
      </div>
    </Theme>
  );
};

export { ThemeWrapper };
