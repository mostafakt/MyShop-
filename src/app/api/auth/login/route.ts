import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { signJwt } from "../../../../lib/jwt";

type LoginBody = { email?: string; password?: string };

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginBody;
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const demoEmail = "user@example.com";
    const demoPassword = "password123";

    if (email !== demoEmail || password !== demoPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = { id: "user-123", name: "Demo User", email };

    const token = await signJwt({
      sub: user.id,
      email: user.email,
      name: user.name,
    });

    const res = NextResponse.json({ user });

    res.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { message: (err as Error).message || "Bad Request" },
      { status: 400 }
    );
  }
}
