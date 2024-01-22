// mark as client component
"use client";
import { useStore } from "@/store/store";
import useAuthStore from "@/store/user";
import { SessionProvider, useSession } from "next-auth/react";

import React, { useEffect } from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {


  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
