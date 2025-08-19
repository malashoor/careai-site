import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("careai_consent", "accepted", { 
    maxAge: 31536000, // 1 year
    sameSite: "lax", 
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: false // Allow client-side access
  });
  return res;
}
