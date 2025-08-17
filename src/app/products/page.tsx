/* eslint-disable @typescript-eslint/ban-ts-comment */
import ProductCard from "@/components/products/ProductCard";
import ProductCardSkeleton from "@/components/products/skeletons/ProductCardSkeleton";
import { fetchProducts } from "@/services/products";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products — MyShop",
  description: "Browse featured products — MyShop product catalog",
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Our Products
        </h1>
        <p className="mt-2 text-base-content/70 max-w-2xl mx-auto">
          Discover our carefully curated collection of high-quality products
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
        <Suspense
          fallback={
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </>
          }
        >
          {products.data.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
