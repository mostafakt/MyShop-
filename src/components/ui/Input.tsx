"use client";

import React from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  hint?: string | null;
  id?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { label, error, hint, id, className, ...rest } = props;
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium mb-2 text-base-content"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          {...rest}
          className={clsx(
            "w-full rounded-field border border-gray-500 px-4 py-3",
            "bg-base-100 text-base-content placeholder:text-neutral-content/60",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            "transition-colors duration-200",
            error && "border-error focus:ring-error/50 focus:border-error",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
        />
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-2 text-sm text-neutral-content">
            {hint}
          </p>
        )}
        {error && (
          <p id={`inputId}-error`} className="mt-2 text-sm text-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;