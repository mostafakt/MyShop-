import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-base-200 to-base-300">
      <div className="bg-base-100/80 backdrop-blur-lg p-8 rounded-box shadow-xl max-w-3xl w-full mx-4 border border-base-300">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image
              src="/images/homepage/Magnifier Magnifying Glass.png"
              alt="404 illustration"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-base-content mb-4">
              Oops! Page Not Found
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button variant="primary" className="text-lg">
                  Return to Homepage
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="text-base-content/70 mb-2">Need immediate help?</p>
              <Button variant="ghost" size="sm">
                <Link href="/contact" className="text-primary">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
