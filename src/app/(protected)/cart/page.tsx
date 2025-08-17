import { redirect } from "next/navigation";
import { getUserFromServerCookie } from "@/lib/server-auth";
import CartClient from "@/components/cart/CartClient";

export default async function CartPage() {
  const serverUser = await getUserFromServerCookie();
  if (!serverUser) {
    redirect("/login");
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your cart</h1>

      <CartClient />
    </section>
  );
}
