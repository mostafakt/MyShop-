import { Product } from "@/types/product";
import { Card } from "../ui";
import Image from "next/image";
import ProductInteractions from "./ProductInteractions";

export default function ProductDetail({ product }: { product: Product }) {
  const image = product.images?.[0] ?? "/images/placeholder.png";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-box overflow-hidden">
        <div className="relative w-full h-[480px] bg-base-200 rounded-box">
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div>
        <Card>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-base-content">
              {product.name}
            </h1>

            <div className="badge badge-neutral text-neutral-content">
              {product.category}
            </div>

            <div className="text-2xl font-bold text-primary">
              {product.currency ?? "USD"} {product.price.toFixed(2)}
            </div>

            <div className="mt-2">
              <p className="text-base text-base-content/80">
                {product.description}
              </p>
            </div>

            <div className="mt-4">
              <ProductInteractions product={product} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
