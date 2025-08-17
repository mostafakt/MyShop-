import ProductCardSkeleton from "@/components/products/skeletons/ProductCardSkeleton";

export default function LoadingProducts() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
