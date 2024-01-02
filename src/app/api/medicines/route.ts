import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        title: "Paracetamol",
        description: "Tomar 1 vez a cada 4 horas, por 5 dias.",
        nextHours: "2023-12-26 08:00:00",
      },
      {
        title: "Ibuprofeno",
        description: "Tomar 1 vez a cada 8 horas, por 3 dias.",
        nextHours: "2023-12-26 12:00:00",
      },
      {
        title: "Cetirizina",
        description: "Tomar 1 vez ao dia, antes de dormir, por 7 dias.",
        nextHours: "2023-12-26 22:00:00",
      },
      {
        title: "Omeprazol",
        description: "Tomar 1 vez ao dia, antes do café da manhã, por 10 dias.",
        nextHours: "2023-12-26 07:30:00",
      },
      {
        title: "Amoxicilina",
        description: "Tomar 2 vezes ao dia, a cada 12 horas, por 7 dias.",
        nextHours: "2023-12-26 14:00:00",
      },
    ],
  });
}
