import React from "react";
import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-box p-6 shadow-soft",
        "bg-base-100 text-base-content",
        "border border-base-300",
        "flex flex-col gap-3 items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
