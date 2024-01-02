"use client";
import { ReactNode } from "react";
import { Button, Theme } from "react-daisyui";

export interface IThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = (props: IThemeWrapperProps) => {
  return (
    <Theme dataTheme="light">
      <div className="flex min-h-screen flex-col items-center justify-start">
        {props.children}
      </div>
    </Theme>
  );
};

export { ThemeWrapper };
