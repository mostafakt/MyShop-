"use client";

import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import { Product } from "@/types/product";
import React, { useState } from "react";
import { Button } from "../ui";

export default function ProductInteractions({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState<number>(1);
  const priceSnapshot = product.price;

  function addToCart() {
    dispatch(
      addItem({
        item: {
          productId: product.id,
          name: product.name,
          price: priceSnapshot,
          quantity: qty,
          image: product.images?.[0] ?? null,
        },
      })
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="relative flex items-center border border-base-300 rounded-field bg-base-200 overflow-hidden">
        <Button
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-10 h-10 flex items-center justify-center   hover:bg-base-300 transition-colors"
        >
          −
        </Button>

        <div className="w-12 text-center text-base-content font-medium">
          {qty}
        </div>

        <Button
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="w-10 h-10 flex items-center justify-center   hover:bg-base-300 transition-colors"
        >
          +
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <Button
          onClick={addToCart}
          variant="primary"
          className="w-full sm:w-auto"
        >
          Add to cart
        </Button>
        <Button
          variant="ghost"
          className="w-full sm:w-auto border border-base-300 hover:bg-base-200"
        >
          Buy now
        </Button>
      </div>
    </div>
  );
}
