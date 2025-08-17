import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {year} MyShop. All rights reserved.</div>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-sm hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-base-300 text-center text-sm text-base-content/80">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
          <p className="mt-2">Mostafa Kattan</p>
        </div>
      </div>
    </footer>
  );
}
