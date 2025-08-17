export type Product = {
  id: string;
  name: string;
  slug?: string;
  description: string;
  price: number;
  currency?: string;
  category?: string;
  images?: string[];
  featured?: boolean;
  createdAt?: string;
};
