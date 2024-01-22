import { getSession } from "@/app/lib/session";
import { fido } from "@/lib/fido";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";
export async function GET(req: any, res: any){
  const cookieStore =   cookies().get("session")
 
  let session = cookieStore && JSON.parse(cookieStore?.value)

  const authnOptions = await fido.assertionOptions();
  
  session.challenge = Buffer.from(authnOptions.challenge);

  authnOptions.challenge = Buffer.from(authnOptions.challenge);
  cookies().set("session", JSON.stringify(session));
 return NextResponse.json(authnOptions);
}
