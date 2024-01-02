import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = req.cookies.get("session");

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //   if (session && req.nextUrl.pathname === "/login") {
  //     return NextResponse.redirect(new URL("/home", req.url));
  //   }

  //   if (session && req.nextUrl.pathname === "/") {
  //     return NextResponse.redirect(new URL("/home", req.url));
  //   }
  //   if (!session && req.nextUrl.pathname !== "/login") {
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }

  //Call the authentication endpoint
  //   const responseAPI = await fetch("http://localhost:8080/api/login", {
  //     method: "GET",
  //     headers: {
  //       Cookie: `session=${session?.value}`,
  //     },
  //   });

  //   console.log("responseAPI", responseAPI.status);
  //   //Return to /login if token is not authorized
  //   if (responseAPI.status !== 200) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
}

export const config = {
  matcher: ["/home", "/"],
};
