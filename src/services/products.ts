import { apiFetch } from "@/lib/api-client";
import { Product } from "@/types/product";

export async function fetchProducts() {
  return apiFetch<{ data: Product[] }>("/api/products", "products", {
    method: "GET",
  });
}

export async function fetchProductById(id: string) {
  return apiFetch<{ data: Product }>(`/api/products/${id}`, `product-${id}`, {
    method: "GET",
  });
}
