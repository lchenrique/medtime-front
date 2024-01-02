"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { app, auth, provider } from "../firebase";
import { redirect, usePathname, useRouter } from "next/navigation";

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
  avatar: user.photoURL,
});
const useAuth = () => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        // setLoading(false);

        return;
      }

      fetch("https://ewe-simple-polecat.ngrok-free.app/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
        }
      });
    });
  }, []);

  const GoogleLogin = async () => {
    await signInWithRedirect(auth, provider);
  };

  async function signOutUser() {
    setLoading(true);
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch(
      "https://ewe-simple-polecat.ngrok-free.app/api/signOut",
      {
        method: "POST",
      }
    );

    if (response.status === 200) {
      router.push("/login");
    }
    setLoading(false);
  }

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setUser(null);

      setLoading(false);

      console.log("nao tem");
      return;
    }

    var formattedUser = formatAuthUser(authState);
    if (formattedUser) {
      console.log(" tem", path);
      if (path === "/login") {
        router.push("/home");

        return;
      }
      setLoading(false);

      setUser(formattedUser);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);

    return () => unsubscribe();
  }, []);

  useEffect(() => {}, [user]);

  return { user, GoogleLogin, setUser, loading, signOutUser };
};

export { useAuth };
