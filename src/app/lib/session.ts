import nextSession from "next-session";

export const getSession = nextSession({
  name: "WIB_SESSION",
});