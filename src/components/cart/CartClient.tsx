"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  updateQuantity,
  removeItem,
  clearCart,
} from "@/store/slices/cartSlice";
import { Button, Card } from "@/components/ui";

export default function CartClient() {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((s) => s.cart);

  const total = useMemo(() => totalPrice, [totalPrice]);

  if (!items || items.length === 0) {
    return (
      <Card className="p-8 text-center bg-base-100 border border-base-300 rounded-box">
        <p className="text-lg text-base-content mb-4">Your cart is empty</p>
        <Button variant="primary">
          <a href="/products">Browse products</a>
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-base-100 border border-base-300 rounded-box p-6 space-y-6">
        {items.map((it) => (
          <div
            key={it.productId}
            className="flex items-start gap-4 pb-6 border-b border-base-300 last:border-0 last:pb-0"
          >
            <div className="w-24 h-24 relative rounded-field overflow-hidden bg-base-200 flex-shrink-0">
              {it.image ? (
                <Image
                  src={it.image}
                  alt={it.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-neutral-content">
                  No image
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base-content truncate">
                    {it.name}
                  </h3>
                  <p className="text-sm text-base-content">
                    {it.price.toFixed(2)} USD
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-base-content">
                    {(it.price * it.quantity).toFixed(2)} USD
                  </p>
                  <p className="text-xs text-base-content">
                    ({it.quantity} × {it.price.toFixed(2)})
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="flex items-center border border-base-300 rounded-field bg-base-200 overflow-hidden">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          productId: it.productId,
                          quantity: Math.max(1, it.quantity - 1),
                        })
                      )
                    }
                    className="w-8 h-8 !p-0 rounded-none hover:bg-base-300"
                    aria-label={`Decrease quantity of ${it.name}`}
                  >
                    −
                  </Button>

                  <span className="min-w-[32px] text-center text-base-content font-medium">
                    {it.quantity}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          productId: it.productId,
                          quantity: it.quantity + 1,
                        })
                      )
                    }
                    className="w-8 h-8 !p-0 rounded-none hover:bg-base-300"
                    aria-label={`Increase quantity of ${it.name}`}
                  >
                    +
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    dispatch(removeItem({ productId: it.productId }))
                  }
                  className="text-error hover:bg-error/10"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-base-100 border border-base-300 rounded-box p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-base-content">Items: {totalItems}</p>
          <p className="text-xl font-bold text-base-content">
            Total: {total.toFixed(2)} USD
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            variant="secondary"
            onClick={() => dispatch(clearCart())}
            className="w-full sm:w-auto"
          >
            Clear cart
          </Button>
          <Button
            onClick={() => alert("Order flow not implemented in this demo")}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
}
