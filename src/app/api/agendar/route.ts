import { NextResponse } from "next/server";
import * as schedule from "node-schedule";

export async function POST(req: Request) {
  const { date } = await req.json();
  if (date) {
    const _date = new Date(date);
    schedule.scheduleJob(_date, function () {
      console.log("The world is going to end today.");
    });

    return NextResponse.json({
      status: 200,
      message: "The world is going to end today",
    });
  }

  return NextResponse.json({
    status: 500,
    message: "Invalid",
  });
}
