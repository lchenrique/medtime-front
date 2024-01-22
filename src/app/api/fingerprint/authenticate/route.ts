import { getSession } from "@/app/lib/session";
import { env } from "@/env";
import { db } from "@/lib/db";
import { fido } from "@/lib/fido";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { bufferToBase64 } from "@/utils";
import { signIn } from "@/auth";
export async function POST(request: any, res: any) {
  const cookieStore = cookies().get("session");

  let session = cookieStore && JSON.parse(cookieStore?.value);
  if (session) {
    const req = await request.json();

    const { credential } = req;

    credential.rawId = new Uint8Array(
      Buffer.from(credential.rawId, "base64")
    ).buffer;

    const challenge = new Uint8Array(session.challenge.data).buffer;
    const { publicKey, prevCounter } = session;

    if (publicKey === "undefined" || prevCounter === undefined) {
      return NextResponse.json({ status: "not found" });
    } else {
      const assertionExpectations: any = {
        challenge,
        origin: env.BASE_URL,
        factor: "either",
        publicKey,
        prevCounter,
        userHandle: new Uint8Array(Buffer.from(session.userHandle, "base64"))
          .buffer, //new Uint8Array(Buffer.from(req.session.userHandle.data)).buffer
      };

      try {
        await fido.assertionResult(credential, assertionExpectations); // will throw on error

        const user = await db.user.findFirst({
          where: {
            fingerprint: bufferToBase64(credential.rawId),
          },
        });
        if (!user) {
          return NextResponse.json({ status: "failed" });
        }


        return NextResponse.json({ status: "ok", email: user.email });
      } catch (e) {
        console.log("error", e);
        return NextResponse.json({ status: "failed" });
      }
    }
  }
  return NextResponse.json({ status: "failed" });
}
