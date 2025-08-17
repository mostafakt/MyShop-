import { products } from "@/data/products";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const featured = url.searchParams.get("featured");

  let list = products;
  if (featured === "true") {
    list = products.filter((p) => p.featured);
  }

  return NextResponse.json({ data: list });
}
