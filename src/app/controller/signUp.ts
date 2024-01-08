import { api } from "@/app/controller/apiService";
import { z } from "zod";

export const signUp = async (data: any) => {
  return await api.post("/api/auth/sign-up", data);
};
