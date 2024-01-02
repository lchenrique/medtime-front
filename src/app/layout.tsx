import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { BottomBar } from "@/components/BottomBar";
import { cn } from "@/utils";
import { AuthUserProvider } from "@/context/auth.context";
import { Theme } from "react-daisyui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ThemeWrapper } from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn(inter.className)}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
