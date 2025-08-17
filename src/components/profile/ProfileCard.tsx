"use client";

import { Card } from "../ui";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export default function ProfileCard() {
  const user = useAppSelector((s) => s.auth.user);

  return (
    <Card className="max-w-3xl bg-base-100 border border-base-300 rounded-box shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 p-6">
        <div className="flex items-center gap-4 w-full">
          <div className="w-20 h-20 rounded-full bg-base-200 text-base-content flex items-center justify-center text-xl font-bold border border-base-300">
            {user?.name
              ? user?.name.charAt(0).toUpperCase()
              : user?.email?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-semibold text-base-content">
              {user?.name ?? "—"}
            </p>
            <p className="text-sm text-base-content">{user?.email}</p>
            <p className="mt-2 text-sm text-base-content">
              Member since:{" "}
              <span className="font-medium text-base-content">—</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/your-products"
            className="text-sm font-medium text-nowrap text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Your products
          </Link>
        </div>
      </div>

      <div className="border-t border-base-300 my-2 mx-6"></div>
    </Card>
  );
}
