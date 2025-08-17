import ProductDetail from "@/components/products/ProductDetail";
import { fetchProductById } from "@/services/products";
import { Product } from "@/types/product";
import { Metadata } from "next";

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const productData = await fetchProductById(params.id);
  const product = productData.data;
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — MyShop`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images?.length ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const product = await fetchProductById(params.id);
  if (!product) {
    throw new Error(`Product with id "${params.id}" not found`);
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <ProductDetail product={product.data as Product} />
    </section>
  );
}
