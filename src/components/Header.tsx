"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/auth-client";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearAuth } from "../store/slices/authSlice";
import { Button } from "./ui";
import ThemeToggle from "./theme/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useAppSelector((s) => s.auth.user);
  const dispatch = useAppDispatch();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch(clearAuth());
      router.push("/login");
    },
  });

  return (
    <header className="bg-base-100 text-base-content shadow-md border-b border-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-box bg-primary flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 bg-primary-content rounded-full" />
            </div>
            <span className="font-bold text-xl text-primary">MyShop</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`transition-colors hover:text-primary ${
                pathname == "/" ? "font-bold text-primary" : "text-base-content"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`transition-colors hover:text-primary ${
                pathname.startsWith("/products")
                  ? "font-bold text-primary"
                  : "text-base-content"
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-base-content transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base-content transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              href="/cart"
              className="p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className="text-base-content hover:text-primary transition-colors hidden sm:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8 h-8 flex items-center justify-center">
                        {user.name?.charAt(0) || "U"}
                      </div>
                    </div>
                    <span>{user.name ?? "Profile"}</span>
                  </div>
                </Link>
                <Button
                  variant="primary"
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                  className="hidden sm:block"
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <Link
                href="/login"
                className="btn btn-primary btn-sm hidden sm:inline-flex"
              >
                Sign in
              </Link>
            )}

            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden inline-flex focus:outline-none p-2 rounded-box bg-base-200 hover:bg-base-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-base-300">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className={`p-2 rounded-box transition-colors ${
                  pathname == "/"
                    ? "bg-primary text-primary-content font-bold"
                    : "hover:bg-base-200"
                }`}
              >
                Home
              </Link>{" "}
              <Link
                href="/products"
                className={`p-2 rounded-box transition-colors ${
                  pathname.startsWith("/products")
                    ? "bg-primary text-primary-content font-bold"
                    : "hover:bg-base-200"
                }`}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="p-2 rounded-box hover:bg-base-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="p-2 rounded-box hover:bg-base-200 transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="p-2 rounded-box hover:bg-base-200 transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => logoutMutation.mutate()}
                    disabled={logoutMutation.isPending}
                    className="btn btn-primary w-full mt-2"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link href="/login" className="btn btn-primary w-full mt-2">
                  Sign in
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
