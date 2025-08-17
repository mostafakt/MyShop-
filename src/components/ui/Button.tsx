"use client";

import React from "react";
import clsx from "clsx";

type Variant =
  | "black"
  | "primary"
  | "secondary"
  | "ghost"
  | "accent"
  | "outline";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs h-8 min-h-8",
  md: "px-4 py-2 text-sm h-10 min-h-10",
  lg: "px-6 py-3 text-base h-12 min-h-12",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-content hover:bg-primary/90 " +
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",

  secondary:
    "bg-secondary text-secondary-content hover:bg-secondary/90 " +
    "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",

  ghost:
    "bg-transparent text-base-content hover:bg-base-200 " +
    "focus-visible:ring-2 focus-visible:ring-base-content",

  accent:
    "bg-accent text-accent-content hover:bg-accent/90 " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  black:
    "bg-black text-white hover:bg-black/90 " +
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",

  outline:
    "bg-transparent border border-base-300 text-base-content " +
    "hover:bg-base-200 hover:border-base-400 " +
    "focus-visible:ring-2 focus-visible:ring-base-content",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-field font-medium",
        "transition-all duration-200 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "active:scale-[0.98]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
