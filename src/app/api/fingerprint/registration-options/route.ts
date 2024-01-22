import { getSession } from "@/app/lib/session";
import { fido } from "@/lib/fido";
import crypto from 'crypto';
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: any, res: any){
  let  session:any = {
    challenge: null,
    userHandle:null
  }

  const registrationOptions = await fido.attestationOptions();

  session.challenge = Buffer.from(registrationOptions.challenge);
  session.userHandle = crypto.randomBytes(32);

  registrationOptions.user.id = session.userHandle;
  registrationOptions.challenge = Buffer.from(registrationOptions.challenge);
  

  console.log({registrationOptions})
  
  // iOS
  registrationOptions.authenticatorSelection = {authenticatorAttachment: 'platform'};

  cookies().set("session", JSON.stringify(session));
 return NextResponse.json(registrationOptions)
}
