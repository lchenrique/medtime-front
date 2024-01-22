import { EXPIRES_TOKEN_TIME } from "@/config";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidva } from "uuid";
import { db } from "./db";
export const generateVerificationToken = async (email: string) => {
  const token = uuidva();
  const expires = new Date(new Date().getTime() + EXPIRES_TOKEN_TIME);
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken
};
