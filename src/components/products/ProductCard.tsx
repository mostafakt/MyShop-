import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Card } from "../ui";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0] ?? "/images/placeholder.png";
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <Link
        href={`/products/${product.id}`}
        className="block h-full   w-full"
      >
        <div className="relative w-full h-[220px] rounded-field overflow-hidden bg-base-200">
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>

        <div className="mt-4 p-2 overflow-hidden w-full">
          <h3 className="text-lg font-semibold text-base-content group-hover:text-primary transition-colors !truncate max-w-full">
            {product.name}
          </h3>
          <p className="text-sm text-base-content/70 mt-2 line-clamp-2 min-h-[40px]">
            {product.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-bold text-primary">
              {product.currency ?? "USD"} {product.price.toFixed(2)}
            </div>
            <div className="text-sm font-medium text-primary group-hover:text-primary-content group-hover:bg-primary px-3 py-1 rounded-field transition-all">
              View
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
