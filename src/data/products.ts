import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p_e1",
    name: "Apple iPhone 14 Pro",
    slug: "apple-iphone-14-pro",
    description:
      '6.1" Super Retina XDR display, A16 Bionic chip, 128GB storage, Pro camera system with 48MP main sensor, up to 23 hours video playback.',
    price: 999.0,
    currency: "USD",
    category: "electronics",
    images: [
      "/images/products/Apple iPhone 14 Pro.png",
      "/images/products/Apple iPhone 14 Pro2.png",
    ],
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e2",
    name: "Samsung Galaxy S23",
    slug: "samsung-galaxy-s23",
    description:
      '6.1" Dynamic AMOLED 2X, Snapdragon 8 Gen 2, 128GB, triple-lens camera (50MP main), 3900mAh battery with fast charging.',
    price: 799.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/Samsung Galaxy S23.png"],
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e3",
    name: 'Apple MacBook Pro 14" (M2)',
    slug: "macbook-pro-14-m2",
    description:
      "14-inch Liquid Retina XDR, Apple M2 Pro chip, 16GB RAM, 512GB SSD, macOS, up to 18 hours battery life — for pro workflows.",
    price: 1999.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/Apple MacBook Pro.png"],
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e4",
    name: "Dell XPS 13",
    slug: "dell-xps-13",
    description:
      '13.4" FHD+ display, Intel Core i7, 16GB RAM, 512GB NVMe SSD, ultra-thin chassis — portable Windows laptop for everyday productivity.',
    price: 1199.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/Dell XPS 13.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e5",
    name: "Apple iPad Air (5th gen)",
    slug: "ipad-air-5",
    description:
      '10.9" Liquid Retina, M1 chip, 256GB storage, supports Apple Pencil 2 — great for note-taking and light photo/video editing.',
    price: 599.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/Apple MacBook Pro.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e6",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    description:
      "Over-ear wireless headphones with industry-leading noise cancellation, up to 30 hours battery, touch controls and high-res audio support.",
    price: 349.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/Sony WH-1000XM5.png"],
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e7",
    name: "Bose QuietComfort Earbuds II",
    slug: "bose-qc-earbuds-ii",
    description:
      "True wireless earbuds with adaptive noise cancelling, secure fit, IPX4 sweat resistance, and up to 24 hours total battery with case.",
    price: 279.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e8",
    name: "Apple Watch Series 8",
    slug: "apple-watch-series-8",
    description:
      "41mm or 45mm smartwatch, blood oxygen & ECG, temperature sensing, up to 18 hours battery, watchOS with fitness and health tracking.",
    price: 399.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e9",
    name: 'Samsung 55" QLED Smart TV (4K)',
    slug: "samsung-55-qled-4k",
    description:
      "55-inch QLED 4K HDR display, smart TV platform with major streaming apps, 120Hz refresh, multiple HDMI 2.1 ports.",
    price: 699.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e10",
    name: "Nintendo Switch OLED",
    slug: "nintendo-switch-oled",
    description:
      '7" OLED screen, docked/handheld modes, 64GB internal storage, enhanced audio — great for home and portable gaming.',
    price: 349.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e11",
    name: "Samsung T7 Shield 1TB (External SSD)",
    slug: "samsung-t7-shield-1tb",
    description:
      "Portable NVMe external SSD, 1TB, USB 3.2 Gen2 (10Gbps), rugged design with IP65 dust/water resistance and up to 1050MB/s transfer speeds.",
    price: 129.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_e12",
    name: 'ASUS 27" 144Hz Gaming Monitor (WQHD)',
    slug: "asus-27-144hz-wqhd",
    description:
      "27-inch WQHD (2560×1440) IPS screen, 144Hz refresh, 1ms response, Adaptive-Sync support and low blue light tech for long sessions.",
    price: 329.0,
    currency: "USD",
    category: "electronics",
    images: ["/images/products/no-image.png"],
    featured: false,
    createdAt: new Date().toISOString(),
  },
];

export function findProductById(id: string) {
  return products.find((p) => p.id === id);
}
