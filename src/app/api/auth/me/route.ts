/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "../../../../lib/jwt";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("jwt")?.value;
    if (!cookie)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const payload = await verifyJwt(cookie);

    const user = {
      id: String(payload.sub),
      name: String(payload.name ?? ""),
      email: String(payload.email ?? ""),
    };

    return NextResponse.json({ user });
  } catch (e) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
