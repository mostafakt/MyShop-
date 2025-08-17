import "./globals.css";
import type { ReactNode } from "react";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthInitializer from "@/components/AuthInitializer";
import { cookies } from "next/headers";

export const metadata = {
  title: "MyShop e-commerce",
  description: "electronic devices",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieTheme = cookies().get("site-theme")?.value;
  const isDark = cookieTheme === "dark";

  return (
    <html
      lang="en"
      className={`h-full  ${isDark ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-base-300 text-base-content transition-colors duration-300">
        <Providers>
          <AuthInitializer>
            <Header />
            <main className="flex-1  ">{children}</main>
            <Footer />
          </AuthInitializer>
        </Providers>
      </body>
    </html>
  );
}
