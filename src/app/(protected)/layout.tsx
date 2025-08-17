"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCurrentUser, selectAuthStatus } from "@/store/slices/authSlice";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const status = useAppSelector(selectAuthStatus);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCurrentUser());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [status, router, pathname]);

  if (status === "idle" || status === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-primary border-t-transparent animate-spin-reverse"></div>
          </div>
          <p className="text-lg font-medium text-base-content">
            Verifying your session...
          </p>
          <p className="text-sm text-neutral-content text-center max-w-md">
            Please wait while we authenticate your credentials
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
