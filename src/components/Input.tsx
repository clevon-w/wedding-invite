"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

type InputVariant = "normal" | "disabled" | "error";

const inputWrapperVariants = cva("flex flex-col gap-[4px]", {
  variants: {
    variant: {
      normal: "",
      disabled: "",
      error: "",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

const inputVariants = cva(
  "body-md h-[38px] px-2xs py-4xs rounded-[10px] border outline-none transition-colors",
  {
    variants: {
      variant: {
        normal:
          "bg-transparent border-primary-300 placeholder:text-primary-800 text-primary-1200 focus:border-accent-700 caret-accent-700",
        disabled:
          "bg-primary-200 border-primary-300 placeholder:text-primary-800 text-primary-1200 pointer-events-none",
        error:
          "bg-transparent border-destructive-700 placeholder:text-primary-800 text-primary-1200 focus:border-destructive-700",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helpText?: string;
  error?: boolean;
  width?: string;
  // value is included in InputHTMLAttributes, so we don't need to add it explicitly
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helpText,
      error = false,
      disabled = false,
      placeholder,
      width,
      className = "",
      name,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const variant: InputVariant = disabled
      ? "disabled"
      : error
      ? "error"
      : "normal";

    return (
      <div className={inputWrapperVariants({ variant })}>
        {label && (
          <label className="body-md text-primary-900" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${inputVariants({ variant })} ${className}`}
          style={{ width: width || "100%" }}
          {...props}
        />
        {helpText && (
          <span
            className={`body-sm ${
              error ? "text-destructive-700" : "text-primary-900"
            }`}
          >
            {helpText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
