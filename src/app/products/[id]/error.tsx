"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function ProductError({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Product page error:", error);
  }, [error]);

  return (
    <section className="container mx-auto px-4 py-12 flex justify-center">
      <div className="max-w-lg w-full bg-base-100 border border-base-300 rounded-box p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="bg-error/10 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-base-content mb-2">
            Unable to load product
          </h2>

          <p className="text-base-content/70 mb-6">
            {error.message || "Try refreshing the page or come back later."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
              className="min-w-[150px]"
            >
              Refresh Page
            </Button>

            <Button variant="secondary">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
