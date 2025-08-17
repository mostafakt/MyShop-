import { NextResponse } from "next/server";
import { findProductById } from "../../../../data/products";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = findProductById(id);
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ data: product });
}
