import { fido } from "@/lib/fido";
import crypto from "crypto";
import { NextResponse } from "next/server";
import base64url from "base64url";
import { getSession } from "@/app/lib/session";
import { cookies } from "next/headers";
import { env } from "@/env";
import { bufferToBase64 } from "@/utils";
import { db } from "@/lib/db";

export async function POST(request: any, res: any) {
  const cookieStore = cookies().get("session");

  let session = cookieStore && JSON.parse(cookieStore?.value);
  if (session) {
    const req = await request.json();
    const { credential, id } = req;

    const challenge = new Uint8Array(session.challenge.data).buffer;
    credential.rawId = new Uint8Array(
      Buffer.from(credential.rawId, "base64")
    ).buffer;
    credential.response.attestationObject = base64url.decode(
      credential.response.attestationObject,
      "base64"
    );
    credential.response.clientDataJSON = base64url.decode(
      credential.response.clientDataJSON,
      "base64"
    );

    const attestationExpectations: any = {
      challenge,
      origin: env.BASE_URL,
      factor: "either",
    };

    try {
      const regResult = await fido.attestationResult(
        credential,
        attestationExpectations
      );

      session.publicKey = regResult.authnrData.get("credentialPublicKeyPem");
      session.prevCounter = regResult.authnrData.get("counter");

      const rawId = bufferToBase64(credential.rawId);

      await db.user.update({
        where: {
          id,
        },
        data: {
          fingerprint: rawId,
        },
      });

      cookies().set("session", JSON.stringify(session));

      return NextResponse.json({ status: "ok" });
    } catch (e) {
      console.log("error", e);
      return NextResponse.json({ status: "failed" });
    }
  }
  return NextResponse.json({ status: "failed" });
}
