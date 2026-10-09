import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, guests, attending } = body ?? {};
  if (!name || !phone || typeof attending !== "boolean") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  console.log("RSVP", { name, phone, guests, attending });
  return NextResponse.json({ ok: true });
}
