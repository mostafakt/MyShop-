import { Button } from "@/components/ui";
import { FiShoppingCart } from "react-icons/fi";
import ProductSlide from "@/components/home/ProductSlide";
import { fetchProducts } from "@/services/products";
import Link from "next/link";

export default async function Home() {
  const productData = await fetchProducts();
  const products = productData.data;
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/homepage/hero.png')] bg-no-repeat bg-cover bg-center  overflow-hidden   from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4  text-black dark:text-white">
              Next-Gen Electronics <br />
              <span className="text-white dark:text-black ">
                For Your Digital Life
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-base-content  mb-8 max-w-xl">
              Discover cutting-edge tech with premium quality and unbeatable
              prices. Shop the latest gadgets today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="black" size="lg" className="text-lg">
                <FiShoppingCart className="mr-2" />
                Shop Now
              </Button>
              <Link href="/products">
                <Button variant="black" size="lg" className="text-lg">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative"></div>
        </div>
      </section>

      <ProductSlide featuredProducts={products} />

      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-base-100 mb-4">
            Summer Tech Sale
          </h2>
          <p className="text-xl text-base-100/90 mb-8 max-w-2xl mx-auto">
            Enjoy up to 40% off on all electronics. Limited time offer ends in 7
            days!
          </p>
          <div className="flex justify-center">
            <div className="bg-base-100 text-base-content rounded-box px-6 py-4 flex items-center shadow-lg">
              <div className="text-center mx-4">
                <div className="text-3xl font-bold">07</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="text-center mx-4">
                <div className="text-3xl font-bold">23</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="text-center mx-4">
                <div className="text-3xl font-bold">45</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="text-center mx-4">
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
          <Button variant="accent" size="lg" className="mt-8">
            Shop Sale Now
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-base-100 rounded-box p-8 md:p-12 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest product releases,
                special offers, and tech news
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-box border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>

            <p className="text-center text-base-content/70 mt-4 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
