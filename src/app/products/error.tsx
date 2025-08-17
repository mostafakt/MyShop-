/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Card } from "@/components/ui";

export default function ProductsError({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Products error:", error);
  }, [error]);

  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="text-center">
        <div className="mb-4 text-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
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

        <h2 className="text-2xl font-bold text-base-content">
          Something went wrong
        </h2>
        <p className="mt-2 text-base text-base-content/80">
          We couldn't load the products. Try again later.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-field bg-primary text-primary-content hover:bg-primary/90 transition-colors font-medium"
          >
            Go back home
          </Link>
        </div>
      </Card>
    </section>
  );
}
