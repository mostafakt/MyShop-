import React from "react";
import { Button } from "../ui";
import { Product } from "@/types/product";
import ProductCard from "../products/ProductCard";
import Link from "next/link";

const ProductSlide = ({
  featuredProducts,
}: {
  featuredProducts: Product[];
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto  px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Products
            </h2>
            <p className="text-lg text-base-content/70">
              Discover our best-selling electronics
            </p>
          </div>
          <Link href={"/products"}>
            <Button variant="primary" className="mt-4 md:mt-0">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="flex gap-[30px]  overflow-x-auto">
          {featuredProducts.map((p) => (
            <div className="flex-1 min-w-[300px]" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;
