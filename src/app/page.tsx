import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { Button, Loading } from "react-daisyui";
export default function Initial() {
  const session = cookies().get("session")?.value || "";

  console.log("session", session);
  if (session) {
    redirect("/home");
  } else {
    redirect("/login");
  }

  return <main className="h-screen flex items-center"></main>;
}
