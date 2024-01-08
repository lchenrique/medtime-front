"use client";
import { LoginForm } from "@/components/auth/login/login-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button, Loading } from "react-daisyui";

export default function Login() {
  return <LoginForm />;
}
