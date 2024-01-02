import { NextResponse } from "next/server";
import * as webPush from "web-push";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        title: "Paracetamol",
        description: "Analgésico e antipirético.",
      },
      {
        title: "Ibuprofeno",
        description: "Anti-inflamatório não esteroide.",
      },
      {
        title: "Cetirizina",
        description: "Antialérgico e anti-histamínico.",
      },
      {
        title: "Omeprazol",
        description: "Inibidor de bomba de prótons.",
      },
      {
        title: "Amoxicilina",
        description: "Antibiótico de amplo espectro.",
      },
    ],
  });
}
