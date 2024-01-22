import { auth } from "@/auth";

export const currentUser =  async () => {
  const currentUserState = await auth()
  return currentUserState?.user;
};
